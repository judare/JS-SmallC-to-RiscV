
const nearley = require("nearley");
const grammar = require("./parser.js");

function compile(code) {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  parser.feed(code);
  const ast = parser.results[0];
  return generateRISCV(ast);
}

function generateRISCV(ast) {
  const lines = [];
  function visit(node) {
    if (node.type === "Program") {
      node.body.forEach(visit);
    } else if (node.type === "ReturnStatement") {
      const result = evalExpr(node.argument);
      lines.push(...result);
      lines.push("ret");
    }
  }

  function evalExpr(node) {
    if (node.type === "Literal") {
      return [`li t0, ${node.value}`];
    } else if (node.type === "BinaryExpression") {
      const left = evalExpr(node.left);
      const right = evalExpr(node.right);
      return [
        ...left.map(line => line.replace(/t0/g, "t1")),
        ...right.map(line => line.replace(/t0/g, "t2")),
        "add t0, t1, t2"
      ];
    }
  }

  visit(ast);
  return lines.join("\n");
}

const fs = require("fs");
const code = fs.readFileSync("example.c", "utf-8");
const output = compile(code);
console.log(output);
