//  chamados generics, cuja declaração utiliza os sinais < e >

function Validar<T>(arg: T): T {
    return arg;
}




class ClasseGenerica<T> {
    atributo: T;
    funcao: (x: T, y: T) => T;
}
