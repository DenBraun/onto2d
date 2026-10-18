import assert from "node:assert/strict";

export const COSMOLOGY_FORMAL_CHECKS = new Map();
export const COSMOLOGY_FORMAL_ANALYTICAL_SOURCES = new Map();
export const COSMOLOGY_FORMAL_ADMISSION = {
  "definitions": [
    [
      "phys:single-field-cosmology",
      "D-phys-single-field-cosmology"
    ],
    [
      "phys:canonical-curvature-mode",
      "D-phys-canonical-curvature-mode"
    ],
    [
      "phys:primordial-curvature-spectrum",
      "D-phys-primordial-curvature-spectrum"
    ],
    [
      "phys:superhorizon-curvature-evolution",
      "D-phys-superhorizon-curvature-evolution"
    ]
  ],
  "formalDependencies": [
    [
      "physics:single-field-cosmology-canonical-curvature-mode",
      [
        "phys:single-field-cosmology",
        "phys:canonical-curvature-mode"
      ]
    ],
    [
      "physics:canonical-curvature-mode-primordial-curvature-spectrum",
      [
        "phys:canonical-curvature-mode",
        "phys:primordial-curvature-spectrum"
      ]
    ],
    [
      "physics:canonical-curvature-mode-superhorizon-curvature-evolution",
      [
        "phys:canonical-curvature-mode",
        "phys:superhorizon-curvature-evolution"
      ]
    ],
    [
      "physics:superhorizon-curvature-evolution-primordial-curvature-spectrum",
      [
        "phys:superhorizon-curvature-evolution",
        "phys:primordial-curvature-spectrum"
      ]
    ]
  ],
  "contexts": [],
  "observations": [],
  "dependencies": [],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "mukhanov1988-perturbations",
      "kind": "research-publication",
      "title": "Quantum theory of gauge-invariant cosmological perturbations",
      "authors": [
        "V. F. Mukhanov"
      ],
      "year": 1988,
      "doi": null,
      "url": "https://jetp.ras.ru/cgi-bin/dn/e_067_07_1297.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-theory-article",
        "locators": [
          "Published pages 1297-1298, Sections 2-4, Equations 1-22: canonical scalar plus Einstein gravity, flat background and gauge-invariant perturbation variable",
          "Published page 1299, Sections 4-5, Equations 23-35: quadratic action, canonical commutator, mode normalization and initial-state choices",
          "Published pages 1300-1302, Sections 6-7, Equations 37-53 and Figure 1: short/long-wave evolution, metric spectrum and restricted inflationary example"
        ],
        "limit": "Read all six English-translation pages 1297-1302 and visually checked the equations and Figure 1. Journal archive metadata identifies Soviet Physics JETP 67, 1297-1302 (1988); its issue index calls July 1(7), whereas the article landing calls it No. 7. The scan running footer instead prints 68(1) and a 1989 copyright. These bibliographic differences are retained without assigning a resolved issue number. No DOI was established. The Russian original and cited derivations are not independently reviewed. Modern Fourier, reduced-Planck-mass and curvature-spectrum conventions below are declared translations, not the paper's metric-spectrum normalization. No historical numerical prediction, universal vacuum-independence claim or empirical quantum-origin test is admitted."
      }
    },
    {
      "id": "garriga1999-perturbations",
      "kind": "research-publication",
      "title": "Perturbations in k-inflation",
      "authors": [
        "Jaume Garriga",
        "V. F. Mukhanov"
      ],
      "year": 1999,
      "doi": "10.1016/S0370-2693(99)00602-4",
      "url": "https://arxiv.org/abs/hep-th/9904176v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-author-theory-article",
        "locators": [
          "Author v1 pages 2-6, Equations 1-28: scalar kinetic convention, flat-background limit, curvature variable and quadratic action",
          "Author v1 pages 7-8, Equations 29-35: dimensionless curvature spectrum, adiabatic positive-frequency mode and leading slow-roll result"
        ],
        "limit": "Read all 12 pages of arXiv:hep-th/9904176v1, submitted 26 April 1999; visually checked pages 5-8. The regenerated title date 26 November 2024 is not a new research version. ArXiv metadata identifies Physics Letters B 458, 219-225 (1999); the publisher PDF was not independently reviewed. Admission uses only the canonical p=X-V, sound speed c_s=1, spatially flat K=0 limit. The paper's epsilon denotes energy density, not the graph's epsilon_H. Its positive-root z and the signed z here differ by a constant sign on a monotonic scalar branch, with identical mode equation and power. Noncanonical, curved, tensor and speculative propagation conclusions are not imported."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-single-field-cosmology",
      "kind": "review-finding",
      "statement": "In hbar=c=1 units with signature (+---) and the curvature convention of Mukhanov Equation 1, take S=integral d^4x sqrt(-g)[-M_pl^2 R_4/2 + g^{mu nu} partial_mu phi partial_nu phi/2 - V(phi)], with reduced M_pl^2=(8 pi G)^(-1). The spatially flat background is ds^2=dt^2-a(t)^2 dx^2, dt=a d_eta. For homogeneous phi(t), H=dot(a)/a obeys 3 M_pl^2 H^2=dot(phi)^2/2+V, dot(H)=-dot(phi)^2/(2 M_pl^2), and ddot(phi)+3H dot(phi)+V_,phi=0. For H>0, epsilon_H=-dot(H)/H^2; epsilon_H<1 defines accelerated expansion and a decreasing comoving Hubble radius (aH)^(-1).",
      "scope": "A specified classical Einstein-gravity background with one minimally coupled canonical scalar; no measured inflaton or selected potential.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published pages 1297-1298, Sections 2-4, Equations 1-22: canonical scalar plus Einstein gravity, flat background and gauge-invariant perturbation variable",
          "role": "supports",
          "note": "Equations 1-7 give the action and background. M_pl is explicitly the reduced mass, replacing the source's l_Pl convention."
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 2-6, Equations 1-28: scalar kinetic convention, flat-background limit, curvature variable and quadratic action",
          "role": "supports",
          "note": "Use p=X-V and K=0 in Equations 1-10, so c_s=1 and rho+p=dot(phi)^2."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The potential, background solution and time interval must be supplied. Slow roll is an additional approximation, not implied by canonical kinetic energy or by epsilon_H<1 alone.",
        "The metric and scalar are perturbed about this background; the admission does not quantize the full nonlinear geometry, calculate backreaction or establish that this model occurred in nature.",
        "The Hubble radius is a local expansion scale, not in general a particle or event horizon. Extra fields, nonminimal couplings, noncanonical kinetics and spatial curvature require different stated dynamics."
      ]
    },
    {
      "id": "D-phys-canonical-curvature-mode",
      "kind": "review-finding",
      "statement": "For scalar perturbations with spatial metric g_ij=-a^2[(1-2psi)delta_ij+2 partial_i partial_j E], define Hcal=a'/a=aH, Q=delta(phi)+(phi'/Hcal)psi, v=aQ, z=a phi'/Hcal=a dot(phi)/H, and R=psi+Hcal delta(phi)/phi'=v/z. Primes denote conformal-time derivatives. On an interval with H and dot(phi) nonzero, eliminating the linear lapse/shift constraints gives S2=(1/2)integral d_eta d^3x[(v')^2-(grad v)^2+(z''/z)v^2], up to boundary terms. A Fourier mode satisfies u_k''+[k^2-z''/z]u_k=0; its canonical momentum is pi_v=v'.",
      "scope": "The one propagating scalar degree of freedom in the declared linear single-field model, with c_s=1 and the displayed curvature sign.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published pages 1297-1298, Sections 2-4, Equations 1-22: canonical scalar plus Einstein gravity, flat background and gauge-invariant perturbation variable",
          "role": "supports",
          "note": "Equations 9-22 define scalar metric signs, gauge transformations and v; Q and R are explicit graph notation."
        },
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published page 1299, Sections 4-5, Equations 23-35: quadratic action, canonical commutator, mode normalization and initial-state choices",
          "role": "supports",
          "note": "Equations 23-31 fix the constrained quadratic action, canonical momentum and mode equation."
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 2-6, Equations 1-28: scalar kinetic convention, flat-background limit, curvature variable and quadratic action",
          "role": "supports",
          "note": "For K=0, Equations 19-20 give the same curvature combination, called zeta there; Equations 25-28 give its canonical action."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Q and v include metric constraints; a test scalar delta(phi) on a fixed background is not generally the same degree of freedom. Gauge invariance here is linear, not a claim about arbitrary nonlinear observables.",
        "R has the sign specified by the displayed spatial metric. The notation zeta in another publication must be checked before equating variables; the spectrum below uses this R convention.",
        "The signed z is permitted on a monotonic branch, with z^2=2a^2 epsilon_H M_pl^2. Turning points dot(phi)=0 and exact stationary-scalar de Sitter make R=v/z singular; continue using suitable regular variables instead of applying this formula through them.",
        "Boundary terms are omitted with boundary conditions appropriate to the variation. No full quantum-gravity or nonlinear perturbation calculation is supplied."
      ]
    },
    {
      "id": "D-phys-primordial-curvature-spectrum",
      "kind": "review-finding",
      "statement": "Choose vhat(eta,x)=integral d^3k/(2pi)^3 [a_k u_k(eta) exp(i k.x)+h.c.], [a_k,a_q^dagger]=(2pi)^3 delta^3(k-q), a_k|0>=0, and u_k u_k*'-u_k* u_k'=i. In an early adiabatic regime with omega_k^2=k^2-z''/z>0, |omega_k'/omega_k^2|<<1 and k^2>>|z''/z|, choose u_k approximately exp(-ik eta)/sqrt(2k). With R(x)=integral d^3k/(2pi)^3 R_k exp(i k.x), define <R_k R_q>=(2pi)^3 delta^3(k+q)(2pi^2/k^3) P_R(k), so P_R=k^3|u_k/z|^2/(2pi^2). For the selected initial state and a slow-roll attractor with epsilon_H<<1 and |dot(epsilon_H)/(H epsilon_H)|<<1, the late growing-mode power is approximately [H^2/(8pi^2 epsilon_H M_pl^2)] evaluated at k=aH.",
      "scope": "Equal-time two-point power in the declared Gaussian linear vacuum state; the leading slow-roll value is conditional, not a fitted cosmological parameter.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published page 1299, Sections 4-5, Equations 23-35: quadratic action, canonical commutator, mode normalization and initial-state choices",
          "role": "supports",
          "note": "Equations 27-35 fix quantization and the nonuniqueness of the initial state. The graph uses its own declared Fourier normalization; the source's v_k has a conjugation and sqrt(2) convention difference."
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 7-8, Equations 29-35: dimensionless curvature spectrum, adiabatic positive-frequency mode and leading slow-roll result",
          "role": "supports",
          "note": "Equations 30-34 provide the normalized power and positive-frequency short-wave limit. The final expression is their canonical limit rewritten using reduced M_pl and epsilon_H, not their energy-density epsilon."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The short-wave positive-frequency prescription is the Bunch-Davies limit when the background admits that asymptotic regime. An arbitrary finite initial time or excited state is not fixed by canonical commutators; no universal vacuum or invariance of the spectrum under all state choices is asserted.",
        "The leading expression is the late-time growing-mode amplitude labeled by Hubble crossing, not the exact equal-time power at crossing. It requires a sufficiently long adiabatic initial regime and negligible subsequent evolution of R; transient/non-attractor evolution or reheating transfer must be analyzed separately.",
        "Exact stationary-scalar de Sitter has epsilon_H=0 and z=0, so this curvature-amplitude expression cannot be evaluated by substitution. A spectator massless-field spectrum is a different observable.",
        "P_R is dimensionless power per logarithmic comoving wavenumber, not a local density contrast, individual fluctuation trajectory, particle count or CMB angular spectrum. A two-point function alone does not establish decoherence, a single realized classical outcome, or an observed quantum origin."
      ]
    },
    {
      "id": "D-phys-superhorizon-curvature-evolution",
      "kind": "review-finding",
      "statement": "Substituting v=zR in the canonical mode equation gives (z^2 R_k')'+k^2 z^2 R_k=0. At k=0 its two solutions are R=C1+C2 integral d_eta/z^2. For finite modes whose gradient term is negligible, this is a long-wavelength approximation on the regular single-field interval. R is approximately conserved only when the second contribution and gradient corrections are negligible. An attractor with a decaying second solution admits that limit; single-field dynamics or k/(aH)<<1 alone does not select it.",
      "scope": "A conditional growing/decaying-mode statement from the declared quadratic action; no universal conservation theorem or late-universe transfer calculation.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published page 1299, Sections 4-5, Equations 23-35: quadratic action, canonical commutator, mode normalization and initial-state choices",
          "role": "supports",
          "note": "Equation 31 supplies the mode equation; the displayed R equation and its k=0 integral are its explicitly stated algebraic form."
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 2-6, Equations 1-28: scalar kinetic convention, flat-background limit, curvature variable and quadratic action",
          "role": "supports",
          "note": "Equations 25-28 supply the curvature action and constant-R long-wave solution in the canonical flat limit."
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 7-8, Equations 29-35: dimensionless curvature spectrum, adiabatic positive-frequency mode and leading slow-roll result",
          "role": "supports",
          "note": "The source explicitly selects the nondecaying long-wave mode for conservation and for its slow-roll spectrum."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The integral branch need not decay in a non-attractor background. Hubble-radius exit is not a measurement, instantaneous freezing rule or universal quantum-to-classical transition.",
        "The k=0 solution is a formal long-wave basis; it is not an independently observable homogeneous perturbation or proof that the gradient approximation is uniform for all histories.",
        "During zeros of dot(phi), extra degrees of freedom, entropy transfer or reheating, the stated variable or approximation can fail. A specified evolution and matching calculation is needed before connecting primordial R to later metric potentials, density fields or detector data.",
        "Growth of the canonical mode v proportional to z can coexist with constant R. It is not by itself a new local density contrast, causal signal across the Hubble scale or production of an observed particle population."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:single-field-cosmology",
      "name": "Canonical scalar cosmological background",
      "kind": "definition",
      "description": "In hbar=c=1 units with signature (+---) and the curvature convention of Mukhanov Equation 1, take S=integral d^4x sqrt(-g)[-M_pl^2 R_4/2 + g^{mu nu} partial_mu phi partial_nu phi/2 - V(phi)], with reduced M_pl^2=(8 pi G)^(-1). The spatially flat background is ds^2=dt^2-a(t)^2 dx^2, dt=a d_eta. For homogeneous phi(t), H=dot(a)/a obeys 3 M_pl^2 H^2=dot(phi)^2/2+V, dot(H)=-dot(phi)^2/(2 M_pl^2), and ddot(phi)+3H dot(phi)+V_,phi=0. For H>0, epsilon_H=-dot(H)/H^2; epsilon_H<1 defines accelerated expansion and a decreasing comoving Hubble radius (aH)^(-1).",
      "claimIds": [
        "D-phys-single-field-cosmology"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published pages 1297-1298, Sections 2-4, Equations 1-22: canonical scalar plus Einstein gravity, flat background and gauge-invariant perturbation variable"
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 2-6, Equations 1-28: scalar kinetic convention, flat-background limit, curvature variable and quadratic action"
        }
      ],
      "openObligations": [
        "The potential, background solution and time interval must be supplied. Slow roll is an additional approximation, not implied by canonical kinetic energy or by epsilon_H<1 alone.",
        "The metric and scalar are perturbed about this background; the admission does not quantize the full nonlinear geometry, calculate backreaction or establish that this model occurred in nature.",
        "The Hubble radius is a local expansion scale, not in general a particle or event horizon. Extra fields, nonminimal couplings, noncanonical kinetics and spatial curvature require different stated dynamics."
      ]
    },
    {
      "id": "phys:canonical-curvature-mode",
      "name": "Canonical gauge-invariant curvature mode",
      "kind": "definition",
      "description": "For scalar perturbations with spatial metric g_ij=-a^2[(1-2psi)delta_ij+2 partial_i partial_j E], define Hcal=a'/a=aH, Q=delta(phi)+(phi'/Hcal)psi, v=aQ, z=a phi'/Hcal=a dot(phi)/H, and R=psi+Hcal delta(phi)/phi'=v/z. Primes denote conformal-time derivatives. On an interval with H and dot(phi) nonzero, eliminating the linear lapse/shift constraints gives S2=(1/2)integral d_eta d^3x[(v')^2-(grad v)^2+(z''/z)v^2], up to boundary terms. A Fourier mode satisfies u_k''+[k^2-z''/z]u_k=0; its canonical momentum is pi_v=v'.",
      "claimIds": [
        "D-phys-canonical-curvature-mode"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published pages 1297-1298, Sections 2-4, Equations 1-22: canonical scalar plus Einstein gravity, flat background and gauge-invariant perturbation variable"
        },
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published page 1299, Sections 4-5, Equations 23-35: quadratic action, canonical commutator, mode normalization and initial-state choices"
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 2-6, Equations 1-28: scalar kinetic convention, flat-background limit, curvature variable and quadratic action"
        }
      ],
      "openObligations": [
        "Q and v include metric constraints; a test scalar delta(phi) on a fixed background is not generally the same degree of freedom. Gauge invariance here is linear, not a claim about arbitrary nonlinear observables.",
        "R has the sign specified by the displayed spatial metric. The notation zeta in another publication must be checked before equating variables; the spectrum below uses this R convention.",
        "The signed z is permitted on a monotonic branch, with z^2=2a^2 epsilon_H M_pl^2. Turning points dot(phi)=0 and exact stationary-scalar de Sitter make R=v/z singular; continue using suitable regular variables instead of applying this formula through them.",
        "Boundary terms are omitted with boundary conditions appropriate to the variation. No full quantum-gravity or nonlinear perturbation calculation is supplied."
      ]
    },
    {
      "id": "phys:primordial-curvature-spectrum",
      "name": "Conditional primordial curvature spectrum",
      "kind": "definition",
      "description": "Choose vhat(eta,x)=integral d^3k/(2pi)^3 [a_k u_k(eta) exp(i k.x)+h.c.], [a_k,a_q^dagger]=(2pi)^3 delta^3(k-q), a_k|0>=0, and u_k u_k*'-u_k* u_k'=i. In an early adiabatic regime with omega_k^2=k^2-z''/z>0, |omega_k'/omega_k^2|<<1 and k^2>>|z''/z|, choose u_k approximately exp(-ik eta)/sqrt(2k). With R(x)=integral d^3k/(2pi)^3 R_k exp(i k.x), define <R_k R_q>=(2pi)^3 delta^3(k+q)(2pi^2/k^3) P_R(k), so P_R=k^3|u_k/z|^2/(2pi^2). For the selected initial state and a slow-roll attractor with epsilon_H<<1 and |dot(epsilon_H)/(H epsilon_H)|<<1, the late growing-mode power is approximately [H^2/(8pi^2 epsilon_H M_pl^2)] evaluated at k=aH.",
      "claimIds": [
        "D-phys-primordial-curvature-spectrum"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published page 1299, Sections 4-5, Equations 23-35: quadratic action, canonical commutator, mode normalization and initial-state choices"
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 7-8, Equations 29-35: dimensionless curvature spectrum, adiabatic positive-frequency mode and leading slow-roll result"
        }
      ],
      "openObligations": [
        "The short-wave positive-frequency prescription is the Bunch-Davies limit when the background admits that asymptotic regime. An arbitrary finite initial time or excited state is not fixed by canonical commutators; no universal vacuum or invariance of the spectrum under all state choices is asserted.",
        "The leading expression is the late-time growing-mode amplitude labeled by Hubble crossing, not the exact equal-time power at crossing. It requires a sufficiently long adiabatic initial regime and negligible subsequent evolution of R; transient/non-attractor evolution or reheating transfer must be analyzed separately.",
        "Exact stationary-scalar de Sitter has epsilon_H=0 and z=0, so this curvature-amplitude expression cannot be evaluated by substitution. A spectator massless-field spectrum is a different observable.",
        "P_R is dimensionless power per logarithmic comoving wavenumber, not a local density contrast, individual fluctuation trajectory, particle count or CMB angular spectrum. A two-point function alone does not establish decoherence, a single realized classical outcome, or an observed quantum origin."
      ]
    },
    {
      "id": "phys:superhorizon-curvature-evolution",
      "name": "Conditional long-wavelength curvature evolution",
      "kind": "definition",
      "description": "Substituting v=zR in the canonical mode equation gives (z^2 R_k')'+k^2 z^2 R_k=0. At k=0 its two solutions are R=C1+C2 integral d_eta/z^2. For finite modes whose gradient term is negligible, this is a long-wavelength approximation on the regular single-field interval. R is approximately conserved only when the second contribution and gradient corrections are negligible. An attractor with a decaying second solution admits that limit; single-field dynamics or k/(aH)<<1 alone does not select it.",
      "claimIds": [
        "D-phys-superhorizon-curvature-evolution"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "mukhanov1988-perturbations",
          "locator": "Published page 1299, Sections 4-5, Equations 23-35: quadratic action, canonical commutator, mode normalization and initial-state choices"
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 2-6, Equations 1-28: scalar kinetic convention, flat-background limit, curvature variable and quadratic action"
        },
        {
          "sourceId": "garriga1999-perturbations",
          "locator": "Author v1 pages 7-8, Equations 29-35: dimensionless curvature spectrum, adiabatic positive-frequency mode and leading slow-roll result"
        }
      ],
      "openObligations": [
        "The integral branch need not decay in a non-attractor background. Hubble-radius exit is not a measurement, instantaneous freezing rule or universal quantum-to-classical transition.",
        "The k=0 solution is a formal long-wave basis; it is not an independently observable homogeneous perturbation or proof that the gradient approximation is uniform for all histories.",
        "During zeros of dot(phi), extra degrees of freedom, entropy transfer or reheating, the stated variable or approximation can fail. A specified evolution and matching calculation is needed before connecting primordial R to later metric potentials, density fields or detector data.",
        "Growth of the canonical mode v proportional to z can coexist with constant R. It is not by itself a new local density contrast, causal signal across the Hubble scale or production of an observed particle population."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:single-field-cosmology-canonical-curvature-mode",
      "source": "phys:single-field-cosmology",
      "target": "phys:canonical-curvature-mode",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The specified scalar/background theory supplies the constraints and z; it is an assumed model, not an observed inflationary preparation.",
      "claimIds": [
        "D-phys-canonical-curvature-mode"
      ]
    },
    {
      "id": "physics:canonical-curvature-mode-primordial-curvature-spectrum",
      "source": "phys:canonical-curvature-mode",
      "target": "phys:primordial-curvature-spectrum",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The canonical action and normalization define the mode whose chosen initial state supplies the curvature two-point power.",
      "claimIds": [
        "D-phys-primordial-curvature-spectrum"
      ]
    },
    {
      "id": "physics:canonical-curvature-mode-superhorizon-curvature-evolution",
      "source": "phys:canonical-curvature-mode",
      "target": "phys:superhorizon-curvature-evolution",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The constrained mode equation supplies the two long-wave solutions; no independent conservation or formation mechanism is added.",
      "claimIds": [
        "D-phys-superhorizon-curvature-evolution"
      ]
    },
    {
      "id": "physics:superhorizon-curvature-evolution-primordial-curvature-spectrum",
      "source": "phys:superhorizon-curvature-evolution",
      "target": "phys:primordial-curvature-spectrum",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Using the crossing-labeled slow-roll amplitude at late times requires the stated dominance of the conserved curvature mode; the exact equal-time power definition itself does not require freezing.",
      "claimIds": [
        "D-phys-primordial-curvature-spectrum"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:single-field-cosmology",
      "role": "definition",
      "denotes": "The supplied canonical scalar/Einstein action, flat expanding background and reduced-Planck-mass convention.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-single-field-cosmology"
      ]
    },
    {
      "nodeId": "phys:canonical-curvature-mode",
      "role": "definition",
      "denotes": "The constrained scalar perturbation Q, canonical variable v and comoving-curvature R, including their gauge and nonzero-background conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-canonical-curvature-mode"
      ]
    },
    {
      "nodeId": "phys:primordial-curvature-spectrum",
      "role": "definition",
      "denotes": "The dimensionless two-point power of the declared R operator and state, plus its conditional leading slow-roll normalization.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-primordial-curvature-spectrum"
      ]
    },
    {
      "nodeId": "phys:superhorizon-curvature-evolution",
      "role": "definition",
      "denotes": "The constant and integral long-wave curvature solutions and the explicit conditions for neglecting the second mode.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-superhorizon-curvature-evolution"
      ]
    }
  ]
};

/** Preserve the scalar model, canonical normalization and conditional long-wave limits. */
export function validateCosmologyFormalContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Cosmology formal ${kind} changed ${id}: preserve model, state and conservation conditions`);
    }
  }
}
