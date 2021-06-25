
// Criação de uma interface com TypeScript

interface IPessoa {
    Nome: string;
    Sobrenome: string;
}

class PessoaFisica implements IPessoa {
   Nome : string;
   Sobrenome : string;
   constructor(public nome, public sobrenome) {
       this.Nome = nome
        this.Sobrenome = sobrenome;
   }
}

class ContaCorrente {
    adicionarCorrentista(pessoa: IPessoa){
        alert(pessoa.Nome);
    }
}

let cliente = new PessoaFisica("Edson", "Dionisio");
let conta = new ContaCorrente();
conta.adicionarCorrentista(cliente);