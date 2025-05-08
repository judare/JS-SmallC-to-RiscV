grammar SmallC;

program: statement+ ;

statement
    : varDecl
    | assignment
    | ifStmt
    | whileStmt
    | increment
    | block
    ;

lvalue
    : ID
    | ID '[' expr ']'     // acceso a arreglo, como a[i]
    ;

varDecl
    : 'int' ID ('[' INT ']')? ';'     // int x; o int arr[10];
    ;
assignment
    : lvalue '=' expr ';'
    ;
ifStmt: 'if' '(' expr ')' statement ('else' statement)? ;
whileStmt: 'while' '(' expr ')' statement ;
block: '{' statement* '}' ;

increment
    : lvalue ('++' | '--') ';'
    ;



expr
    : expr op=('*'|'/') expr     # MulDivExpr
    | expr op=('+'|'-') expr     # AddSubExpr
    | expr op=('=='|'!='|'<'|'>'|'<='|'>=') expr  # CompareExpr
    | expr op=('&&'|'||') expr   # LogicalExpr
    | '(' expr ')'               # ParenExpr
    | lvalue                       # LvalueExpr
    | INT                        # IntExpr
    ;

// Comentarios
LINE_COMMENT: '//' ~[\r\n]* -> skip ;
BLOCK_COMMENT: '/*' .*? '*/' -> skip ;

ID: [a-zA-Z_][a-zA-Z0-9_]* ;
INT: [0-9]+ ;

WS: [ \t\r\n]+ -> skip ;
