import { Graph, type Node } from "./tinygraph-mod.js";

class PlaceholderNode implements Node<unknown> {
  next() {}
}

const graph = new Graph();

const diagram = graph
  .node("embed", new PlaceholderNode())
  .node("retrieve", new PlaceholderNode())
  .node("grader", new PlaceholderNode())
  .node("answer", new PlaceholderNode())
  .node("generate_query", new PlaceholderNode())
  .edge("embed", "retrieve")
  .edge("retrieve", "grader")
  .edge("grader", "generate_query")
  .edge("generate_query", "embed")
  .edge("grader", "answer")
  .setStart("embed")
  .toMermaid();

console.log(diagram);
