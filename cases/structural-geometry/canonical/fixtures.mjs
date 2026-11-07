import { readFile } from "node:fs/promises";
import { buildModelPack } from "@onto2d/model-pack";

export const directory = new URL("./", import.meta.url);
export const readJson = async (name) => JSON.parse(await readFile(new URL(name, directory), "utf8"));
export const input = Object.freeze({ regimeId: "canonical-structure-v1" });
export function packFor(graph) {
  const labels = graph.labels ?? Array.from({ length: graph.nodes }, (_, i) => `n${i}`);
  return buildModelPack({ model: { id: `canonical-${graph.id}`, name: "Declared canonical structure control", version: "1" },
    source: { id: "declared-control", files: [] }, dictionaries: graph.dictionaries ?? {},
    nodes: labels.map((id) => ({ ...graph.nodeAttributes, id })),
    edges: graph.edges.map(([from, to], i) => ({ ...graph.edgeAttributes, id: `e${i}`,
      source: labels[from], target: labels[to], relationLayer: "source-parent" })) });
}
export async function fixtures() {
  const { controls } = await readJson("controls.json");
  return controls.map((graph) => ({ id: graph.id, pack: packFor(graph), input }));
}
