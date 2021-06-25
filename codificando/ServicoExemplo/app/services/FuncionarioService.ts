// Arquivo FuncionarioService


/// <reference path="../interfaces/interfaces.ts" />
module AngularTypeScriptDevmedia.Services {
    export class FuncionariosService implements
    AngularTypeScriptDevmedia.Interfaces.IFuncionariosService {
        httpService: ng.IHttpService
        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }
        getFuncionarios = () => {
         var listaFuncionarios: Array<AngularTypeScriptDevmedia.Interfaces
         .IDadosFuncionario> = [
         { NomeCompleto: "Edson Dionisio", Email: "edson.dionisio@gmail.com",
         Telefone: "81997402800", Setor:
         "Desenvolvimento de sistemas", Funcao: "Desenvolvedor Júnior",
         Salario: 2000 },
         { NomeCompleto: "Marília Késsia", Email: "mkessia@gmail.com",
         Telefone: "81997402800", Setor:
         "Educação", Funcao: "Professora", Salario: 3000 },
         { NomeCompleto: "Caroline França", Email: "carol.dionisio@gmail.com",
         Telefone: "81997400000",
         Setor: "Estética e cosméticos", Funcao: "Esteticista", Salario: 5000 },
         { NomeCompleto: "Renato Nascimento",
         Email: "renato.nascimento@gmail.com", Telefone:
         "81996609900", Setor: "Desenvolvimento de sistemas",
         Funcao: "Desenvolvedor sênior", Salario: 1500 },
         { NomeCompleto: "Mayara", Email: "mayara@gmail.com",
         Telefone: "81999999800", Setor:
         "Desenvolvimento de sistemas", Funcao: "Tester", Salario: 2500 },
         { NomeCompleto: "Benilton Lopes", Email: "benilton@gmail.com",
         Telefone: "81999999999",
         Setor: "Engenharia", Funcao: "Engenheiro elétrico", Salario: 10000 },
         { NomeCompleto: "Artur Oliveira", Email: "arturoliveira@gmail.com",
         Telefone: "81888888888",
         Setor: "Desenvolvimento de sistemas",
         Funcao: "Coordenador de equipe", Salario: 4800 },
         { NomeCompleto: "Alberto", Email: "alberto@gmail.com",
         Telefone: "81999999999",
         Setor: "Desenvolvimento de sistemas",
         Funcao: "Gerente de negócios", Salario: 8100 },
         { NomeCompleto: "Marcelo", Email: "marcelo@gmail.com",
         Telefone: "81999999999",
         Setor: "Financeiro", Funcao: "Gestor financeiro",
         Salario: 7500 },
         { NomeCompleto: "Mariana", Email: "mariana@gmail.com",
         Telefone: "81999999999",
         Setor: "Recursos Humanos", Funcao: "estagiária",
         Salario: 1200 }
           ];
           return listaFuncionarios;
         }
    }
 angular.module("AngularTypeScriptDevmedia").service("AngularTypeScriptDevmedia
 .Services.FuncionariosService", FuncionariosService);
  }