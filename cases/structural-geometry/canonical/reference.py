"""Independent finite isomorphism reference: exhaust all node permutations.

Uses only Python's standard library, source graphs and output adjacency. It
does not import production graph matching, hashing or metric implementations.
"""
import argparse
import hashlib
import itertools
import json
from functools import lru_cache
from pathlib import Path

HERE = Path(__file__).resolve().parent


def pairs(n):
    return [(u, v) for u in range(n) for v in range(n) if u != v]


@lru_cache(maxsize=6)
def permutations(n):
    positions = {edge: i for i, edge in enumerate(pairs(n))}
    return [tuple(1 << positions[(p[u], p[v])] for u, v in pairs(n))
            for p in itertools.permutations(range(n))]


def key(n, edges):
    assert 1 <= n <= 6
    positions = {edge: i for i, edge in enumerate(pairs(n))}
    assert len(set(tuple(edge) for edge in edges)) == len(edges)
    bits = [positions[tuple(edge)] for edge in edges]
    return min(sum(mapping[i] for i in bits) for mapping in permutations(n))


def source_graphs():
    controls = json.loads((HERE / "controls.json").read_text(encoding="utf-8"))["controls"]
    result = []
    for g in controls:
        labels = g.get("labels", ["n" + str(i) for i in range(g["nodes"])])
        result.append((g["id"], labels, [("e" + str(i), labels[u], labels[v]) for i, (u, v) in enumerate(g["edges"])]))
    return result


def expected():
    census = []
    for n in range(1, 5):
        slots = pairs(n)
        keys = [key(n, [edge for i, edge in enumerate(slots) if mask & (1 << i)]) for mask in range(1 << len(slots))]
        census.append({"nodes": n, "labelledGraphs": len(keys), "isomorphismClasses": len(set(keys)), "keys": keys})
    controls = []
    for name, labels, edges in source_graphs():
        index = {label: i for i, label in enumerate(labels)}
        controls.append({"id": name, "nodes": len(labels), "edges": len(edges),
                         "key": key(len(labels), [(index[u], index[v]) for _, u, v in edges])})
    return {"schemaVersion": "1", "method": "minimum-off-diagonal-bitmask-over-all-node-permutations",
            "controlsFileSha256": hashlib.sha256((HERE / "controls.json").read_bytes()).hexdigest(),
            "census": census, "controls": controls}


def verify_artifacts():
    sources = source_graphs()
    for name, labels, edges in sources:
        artifact = json.loads((HERE / "artifacts" / (name + ".json")).read_text(encoding="utf-8"))
        value = artifact["observation"]["value"]
        index = {label: i for i, label in enumerate(labels)}
        assert artifact["evaluation"] == "measured" and value["nodeCount"] == len(labels), name
        assert key(len(labels), [(e["from"], e["to"]) for e in value["edges"]]) == key(
            len(labels), [(index[u], index[v]) for _, u, v in edges]), name
        witness = artifact["witness"]
        mapping = {entry["sourceNodeId"]: entry["canonicalNode"] for entry in witness["nodes"]}
        assert len(mapping) == len(witness["nodes"]) == len(labels) and set(mapping) == set(labels), name
        assert set(mapping.values()) == set(range(len(labels))), name
        mapped = {edge_id: (mapping[u], mapping[v]) for edge_id, u, v in edges}
        claimed = {e["sourceEdgeId"]: (e["from"], e["to"]) for e in witness["edges"]}
        assert len(claimed) == len(witness["edges"]) == len(edges) and claimed == mapped, name
        assert sorted(mapped.values()) == sorted((e["from"], e["to"]) for e in value["edges"]), name
    print("Independent artifact replay passed: {} graph orbits and complete directed mapping witnesses.".format(len(sources)))


def main():
    parser = argparse.ArgumentParser()
    action = parser.add_mutually_exclusive_group(required=True)
    action.add_argument("--write", action="store_true")
    action.add_argument("--verify", action="store_true")
    action.add_argument("--verify-artifacts", action="store_true")
    args = parser.parse_args()
    if args.verify_artifacts:
        verify_artifacts()
        return
    value = expected()
    text = json.dumps(value, indent=2, ensure_ascii=False) + "\n"
    path = HERE / "reference.json"
    if args.write:
        with path.open("w", encoding="utf-8", newline="\n") as stream:
            stream.write(text)
    else:
        assert path.read_text(encoding="utf-8") == text, "Frozen independent canonical reference differs."
    print("Independent permutation reference {}: {} labelled graphs, {} classes, {} controls.".format(
        "written" if args.write else "verified", sum(c["labelledGraphs"] for c in value["census"]),
        sum(c["isomorphismClasses"] for c in value["census"]), len(value["controls"])))


if __name__ == "__main__":
    main()
