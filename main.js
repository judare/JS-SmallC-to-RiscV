import fs from "fs";
import { getAST, validateLexer } from "./antlr.js";

const getRiscvCode = async (input) => {
  const tree = getAST(input);
  const { validator, riscvCode } = validateLexer(tree);
  if (validator.error) {
    throw new Error(validator.error);
  }

  return riscvCode;
};

getRiscvCode(fs.readFileSync("./examples/done-fib.c", "utf-8")).then((riscv) =>
  console.log(riscv)
);
