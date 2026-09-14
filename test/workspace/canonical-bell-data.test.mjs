import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util, sys
spec = importlib.util.spec_from_file_location("bell", "models/causal-emergence/canonical/verify-bell-data.py")
b = importlib.util.module_from_spec(spec)
sys.modules["bell"] = b
spec.loader.exec_module(b)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

test("all deposited Bell rows reproduce figure counts, separate detector periods and the rounded null bounds", () => {
  const result = JSON.parse(python("print(b.json.dumps(b.verify()))"));
  assert.deepEqual(result.runs.map((r) => [r.rows, r.trials, r.wins]), [[4746, 245, 196], [3918, 300, 237]]);
  assert.deepEqual(result.runs[1].parts.map((r) => r.sequentialSurvivors.at(-1)), [56, 244]);
  assert.equal(result.runs[0].scoreI, 2.4);
  assert.notEqual(result.runs[0].S, result.runs[0].scoreI);
  assert.ok(Number(result.runs[0].conditionalUpperTail) > 0.039);
  assert.ok(Number(result.runs[1].conditionalUpperTail) > 0.05);
  for (const key of ["rawAcquisitionReplayed", "stoppingRuleVerified", "rngCalibrationReproduced", "fullStatisticalProofVerified"]) assert.equal(result[key], false);
});

test("Bell eligibility is independent of local outcomes and respects timing and marker boundaries", () => {
  python(`
p = b.PROTOCOLS[2015][0][1]
e = b.Event(1, 1, p.start0, 0, p.start1+250000, 1, 0, 0, 10380, 10372, 11000, 11000, 0, 0, 0, 0)
assert all(b.selection(e, p)[0])
for a in (0, 1):
 for c in (0, 1):
  for x in (0, 10620, 10621, 14320, 14321):
   for y in (0, 10620, 10621, 14320, 14321):
    assert b.selection(e._replace(setting_a=a, setting_b=c, readout_a=x, readout_b=y), p) == b.selection(e, p)
assert [b.readout(t) for t in (0, 10620, 10621, 14320, 14321)] == [-1, -1, 1, 1, -1]
assert not all(b.selection(e._replace(time1=p.start0-1), p)[0])
assert not all(b.selection(e._replace(time1=p.start0+p.width), p)[0])
assert all(b.selection(e._replace(time1=p.start0+p.width-1), p)[0])
assert not all(b.selection(e._replace(invalid_a=250), p)[0])
assert all(b.selection(e._replace(invalid_a=251), p)[0])
assert not all(b.selection(e._replace(excitation_b=5400), p)[0])
`);
});

test("state tags and the replaced detector change only their declared selection and scoring rules", () => {
  python(`
old, new = [p for _, p in b.PROTOCOLS[2016]]
e = b.Event(6, 1, new.start0, 0, new.start1+250000, 1, 1, 0, 10647, 10630, 11000, 11000, 0, 0, 0, 0)
assert all(b.selection(e, new)[0]) and not all(b.selection(e, old)[0])
for channel, start, width in [(0, new.start0, 4000), (1, new.start1, 2500)]:
 plus = e._replace(channel1=channel, channel2=channel, time1=start, time2=start+250000+width-1)
 assert b.selection(plus, new) == ((True, True, True), "psi-plus")
 assert not all(b.selection(plus._replace(time2=plus.time2+1), new)[0])
for a,basis in [(0,0),(0,1),(1,0),(1,1)]:
 minus = b.win(a, basis, 1, 1, "psi-minus")
 plus = b.win(a, basis, 1, 1, "psi-plus")
 assert (minus == plus) == (a == 0)
assert b.upper_tail(2, 2, b.Decimal('0.75')) == b.Decimal('0.5625')
assert b.upper_tail(2, 1, b.Decimal('0.75')) == b.Decimal('0.9375')
assert b.upper_tail(10, 0, b.Decimal('0.75')) == 1
assert b.upper_tail(2, 2, b.Decimal('0.76')) > b.upper_tail(2, 2, b.Decimal('0.75'))
`);
});

test("the Bell parser rejects missing columns, invented binary values and duplicated records", () => {
  python(`
row = '2015-06-26 17:24:12.119993,1,2,5445065,1,5671004,1,1,1,10379,10371,11281,13113,0,0,0,0'
assert len(b.read_events(row)) == 1
bad_bit = row.split(','); bad_bit[7] = '2'
for text in [','.join(row.split(',')[:-1]), ','.join(bad_bit), row+'\\n'+row, '']:
 try: b.read_events(text)
 except (AssertionError, ValueError): pass
 else: raise AssertionError('Invalid deposited table admitted')
`);
});
