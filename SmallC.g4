grammar SmallC;

program: statement+ ;

statement
    : varDecl
    | assignment
    | ifStmt
    | whileStmt
    | block
    ;

varDecl: 'int' ID ';' ;
assignment: ID '=' expr ';' ;
ifStmt: 'if' '(' expr ')' statement ;
whileStmt: 'while' '(' expr ')' statement ;
block: '{' statement* '}' ;

expr: ID
    | INT
    ;

ID: [a-zA-Z_][a-zA-Z0-9_]* ;
INT: [0-9]+ ;

WS: [ \t\r\n]+ -> skip ;
