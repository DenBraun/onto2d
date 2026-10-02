"""Conditional bare-deuteron beta-breakup threshold, not a decay-rate model.

Rau Table 2 provides a correlated adjusted nuclear-mass pair. CODATA 2018
provides the adopted electron mass and u*c^2 conversion. The capture-derived
neutron mass reuses the deuteron binding input, which cancels identically.
Only printed arithmetic, state conventions and a partial covariance term are
checked; original mass adjustments and a complete uncertainty are not replayed.
"""

from decimal import Decimal as D, localcontext
import json


def finite(*values):
    assert all(isinstance(x, D) and x.is_finite() for x in values)


def nonnegative(*values):
    finite(*values)
    assert all(x >= 0 for x in values)


def rest_mass_excess(initial, final):
    """Mass available above the declared asymptotically free final threshold."""
    nonnegative(initial, *final)
    assert initial > 0 and len(final) >= 2
    return initial - sum(final, D(0))


def deuteron_q_mass(deuteron, proton, electron, neutrino=D(0)):
    nonnegative(deuteron, proton, electron, neutrino)
    assert deuteron > 0 and proton > 0 and electron > 0
    return rest_mass_excess(deuteron, [proton, proton, electron, neutrino])


def capture_neutron_mass(deuteron, proton, binding_mass):
    nonnegative(deuteron, proton, binding_mass)
    assert deuteron > 0 and proton > 0 and binding_mass > 0
    neutron = deuteron - proton + binding_mass
    assert neutron > 0
    return neutron


def capture_route_q_mass(neutron, proton, electron, binding_mass):
    nonnegative(neutron, proton, electron, binding_mass)
    assert min(neutron, proton, electron, binding_mass) > 0
    return neutron - proton - electron - binding_mass


def mass_pair_variance(deuteron_error, proton_error, correlation):
    """Variance of md-2mp only; not a full Q uncertainty."""
    nonnegative(deuteron_error, proton_error)
    finite(correlation)
    assert -1 <= correlation <= 1
    # Stable at perfect correlation, including exact cancellation.
    return ((deuteron_error - 2 * proton_error) ** 2
            + 4 * deuteron_error * proton_error * (1 - correlation))


def q_rounding_interval(deuteron, proton, electron, half_steps, conversion, conversion_half_step):
    """Conservative display-rounding box, not a statistical confidence interval."""
    assert len(half_steps) == 3
    nonnegative(*half_steps, conversion, conversion_half_step)
    assert conversion > conversion_half_step
    q = deuteron_q_mass(deuteron, proton, electron)
    assert all(mass > step for mass, step in zip([deuteron, proton, electron], half_steps))
    radius = half_steps[0] + 2 * half_steps[1] + half_steps[2]
    products = [(q + sign * radius) * (conversion + other * conversion_half_step)
                for sign in (-1, 1) for other in (-1, 1)]
    return min(products), max(products)


def bare_q_from_atomic_masses(deuterium, hydrogen, deuterium_binding_ev,
                              hydrogen_binding_ev, conversion):
    """Undo neutral ground-state electronic binding before using bare masses."""
    nonnegative(deuterium, hydrogen, deuterium_binding_ev, hydrogen_binding_ev, conversion)
    assert min(deuterium, hydrogen, conversion) > 0
    return ((deuterium - 2 * hydrogen) * conversion
            + deuterium_binding_ev - 2 * hydrogen_binding_ev)


def threshold_status(q):
    finite(q)
    # Nonnegative available energy does not supply a matrix element or rate.
    return 'energetically-excluded' if q < 0 else 'not-excluded-by-rest-mass-threshold'


def verify():
    with localcontext() as context:
        context.prec = 60
        # One published adjusted branch; neither pair member is a new acquisition.
        proton, deuteron = D('1.007276466580'), D('2.013553212537')
        proton_error, deuteron_error, correlation = D('17e-12'), D('16e-12'), D('.26')
        electron, conversion = D('0.000548579909065'), D('931494102.42')
        q = deuteron_q_mass(deuteron, proton, electron)
        energy = q * conversion
        assert q == D('-0.001548300532065')
        assert threshold_status(energy) == 'energetically-excluded'
        # These half-steps describe printed last digits, not quoted standard errors.
        rounding = q_rounding_interval(deuteron, proton, electron,
                                      [D('5e-13'), D('5e-13'), D('5e-16')],
                                      conversion, D('.005'))
        assert rounding[1] < 0

        binding_mass, printed_neutron = D('0.00238817008'), D('1.00866491604')
        inferred_neutron = capture_neutron_mass(deuteron, proton, binding_mass)
        same_inputs = capture_route_q_mass(inferred_neutron, proton, electron, binding_mass)
        assert same_inputs == q
        # Varying the shared binding input cannot change the reduced Q.
        for delta in [D('-1e-4'), D('1e-4')]:
            changed = binding_mass + delta
            assert capture_route_q_mass(capture_neutron_mass(deuteron, proton, changed),
                                        proton, electron, changed) == q
        rounded_route = capture_route_q_mass(printed_neutron, proton, electron, binding_mass)
        discrepancy = (rounded_route - q) * conversion
        assert discrepancy == D('0.00279448230726')
        assert abs(printed_neutron - inferred_neutron) <= D('5e-12')

        paired_error = mass_pair_variance(deuteron_error, proton_error, correlation).sqrt()
        diagonal_error = mass_pair_variance(deuteron_error, proton_error, D(0)).sqrt()
        assert paired_error < diagonal_error

        return dict(
            channel='ground-state bare d -> free p + free p + free e- + electron antineutrino',
            initialCharge='1', finalCharge=str(2 * 1 - 1 + 0),
            neutrinoRestMassApproximation='0', suppliedEnergy='0',
            protonMassU=str(proton), deuteronMassU=str(deuteron),
            adoptedElectronMassU=str(electron), adoptedUc2Ev=str(conversion),
            qMassU=str(q), qEv=str(energy), qRoundingIntervalEv=list(map(str, rounding)),
            thresholdStatus=threshold_status(energy),
            massPairCorrelation=str(correlation), massPairStdU=str(paired_error),
            massPairStdEv=str(paired_error * conversion), diagonalMassPairStdEv=str(diagonal_error * conversion),
            inferredNeutronMassU=str(inferred_neutron), printedNeutronMassU=str(printed_neutron),
            bindingMassU=str(binding_mass), captureCancellationExact=same_inputs == q,
            roundedCaptureQEv=str(rounded_route * conversion), captureRoundDifferenceEv=str(discrepancy),
            roundingIntervalIsConfidenceInterval=False, completeQUncertaintyReproduced=False,
            massAdjustmentReplayed=False, captureIsIndependentConfirmation=False,
            weakAmplitudeCalculated=False, lifetimePredicted=False,
            allChannelStabilityEstablished=False, arbitraryBoundNeutronStabilityEstablished=False,
        )


if __name__ == '__main__':
    print(json.dumps(verify(), sort_keys=True))
