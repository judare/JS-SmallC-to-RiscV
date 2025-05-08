grammar SmallC;

program: bloqueRaiz+ | functionDecl+;

bloque
    : asignacion
    | declaracion
    | ifSentencia
    | whileSentencia
    | forSentencia
    | incremento
    | block
    | returnStmt
    ;

bloqueRaiz
    : declaracion
    | bloque
    ;

functionDecl
    : tipoRetorno ID '(' paramList? ')' bloqueRaiz
    ;

paramList
    : param (',' param)*
    ;

returnStmt
    : 'return' expresion? ';'
    ;

param
    : tiposPermitidos ID
    ;

tipoRetorno: tiposPermitidos| 'void' ;
tiposPermitidos: 'int' | 'char' ;

lvalue
    : ID
    | ID '[' expresion ']'     // acceso a arreglo, como a[i]
    ;

declaracion
    : tiposPermitidos ID ('[' INT ']')? ';'
    | tiposPermitidos ID  '=' expresion ';'
    ;

asignacion
    : lvalue '=' expresion ';'
    ;
ifSentencia: 'if' '(' expresion ')' bloque ('else' bloque)? ;
whileSentencia: 'while' '(' expresion ')' bloque ;
forSentencia: 'for' '(' asignacion expresion ';' lvalue ('++' | '--') ')' bloque ;
block: '{' bloque* '}' ;

incremento
    : lvalue ('++' | '--') ';'
    ;

funArgumentosLlamado
    :( expresion (',' expresion)*)?
    ;

expresion
    : expresion op=('*'|'/') expresion     # MulDivExpr
    | expresion op=('+'|'-') expresion     # AddSubExpr
    | expresion op=('=='|'!='|'<'|'>'|'<='|'>=') expresion  # CompareExpr
    | expresion op=('&&'|'||') expresion   # LogicalExpr
    | '(' expresion ')'               # ParenExpr
    | ID '(' funArgumentosLlamado ')'     # FuncionExpr
    | lvalue                       # LvalueExpr
    | INT                        # IntExpr
    ;

// Comentarios
COMENTARIOS_LINEA: '//' ~[\r\n]* -> skip ;
COMENTARIOS_BLOQUES: '/*' .*? '*/' -> skip ;

// Tipos basicos
ID: [a-zA-Z_][a-zA-Z0-9_]* ;
INT: [0-9]+ ;
WS: [ \t\r\n]+ -> skip ;
