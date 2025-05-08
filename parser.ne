
@builtin "number.ne"
@builtin "whitespace.ne"

main -> "int" _ "main" _ "(" _ ")" _ "{" _ "return" _ expr _ ";" _ "}" {% 
  ([, , , , , , , , , expr]) => ({ type: "Program", body: [{ type: "ReturnStatement", argument: expr }] }) 
%}

expr -> number {% id %}
      | expr _ "+" _ expr {% ([left, , , , right]) => ({ type: "BinaryExpression", operator: "+", left, right }) %}

number -> [0-9]:+ {% ([digits]) => ({ type: "Literal", value: parseInt(digits.join(""), 10) }) %}
