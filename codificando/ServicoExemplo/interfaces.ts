// Criação do arquivo interfaces.ts

module AngularTypeScriptDevmedia.Interfaces {
   export interface IFuncionariosService {
       getFuncionarios: () => Array<IDadosFuncionario>;
   }
   export interface IDadosFuncionario {
       NomeCompleto: string;
       Email: string;
       Telefone: string;
       Setor: string;
       Funcao: string;
       Salario: number;
   }
}