import { readFile } from "node:fs/promises";
import { canonicalize } from "@onto2d/kernel/canonical";
import { buildModelPack, verifyModelPack } from "@onto2d/model-pack";
import { CAUSAL_EMERGENCE_BUNDLE } from "../causal-emergence/source.mjs";

export const directory = new URL("./", import.meta.url);
export const readJson = async (name) => JSON.parse(await readFile(new URL(name, directory), "utf8"));
export const controls = (await readJson("controls.json")).cases;
export function packFor(graph) {
  return buildModelPack({ model: { id: `ollivier-${graph.id}`, version: "1", name: "Ollivier synthetic control", status: "synthetic" },
    source: { id: "declared-synthetic-graph", files: [] }, nodes: graph.nodes,
    edges: graph.edges.map((edge) => ({ relationLayer: "source-parent", ...edge })), dictionaries: {} });
}

export async function fixtures() {
  const values = controls.map((graph) => ({ id: graph.id, pack: packFor(graph),
    input: { edgeIds: graph.edgeIds ?? graph.edges.map((e) => e.id) } }));
  const source = await readJson("fragments.json");
  const pack = verifyModelPack(JSON.parse(await readFile(CAUSAL_EMERGENCE_BUNDLE, "utf8")));
  const binding = { modelId: pack.manifest.model.id, modelVersion: pack.manifest.model.version,
    modelRootHash: pack.manifest.rootHash, manifestHash: pack.manifest.manifestHash };
  if (canonicalize(source.source) !== canonicalize(binding)) throw new Error("Ollivier source lock differs from the frozen Model Pack.");
  for (const fragment of source.fragments) {
    const included = new Set(fragment.nodeIds);
    // A fragment analyzes either every scoped edge or only the declared relation roles.
    const roles = fragment.analyzedRoles ? new Set(fragment.analyzedRoles) : null;
    values.push({ id: fragment.id, pack, input: { scope: { kind: "induced", nodeIds: fragment.nodeIds },
      edgeIds: pack.files["model/edges.json"].filter((e) => included.has(e.source) && included.has(e.target)
        && (!roles || roles.has(e.role))).map((e) => e.id) } });
  }
  return values.flatMap((entry) => ["zero", "half"].map((idleness) => ({ ...entry,
    id: `${entry.id}-${idleness}`, input: { ...entry.input, idleness } })));
}
