//  Classe criada com TypeScript

class Saudacoes {
    saudacao: string;
    constructor (mensagem: string) {
       this.saudacao = mensagem;
    }
    Saudacoes() {
        return "Olá, " + this.saudacao;
    }
 }