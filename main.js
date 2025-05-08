import fs from "fs";
import { getAST } from "./antlr.js";
import RiscVGenerator from "./riscv.js";

const getRiscvCode = async (input) => {
  const tree = getAST(input);

  const generator = new RiscVGenerator();
  generator.visit(tree);

  return generator.output.join("\n");
};

getRiscvCode(fs.readFileSync("./examples/done-fib.c", "utf-8")).then((riscv) =>
  console.log(riscv)
);
