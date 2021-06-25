/// <reference path="../services/FuncionariosService.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module AngularTypeScriptDevmedia.controllers {
    export class FuncionarioController {
        FuncionariosService: AngularTypeScriptDevmedia.Interfaces.IFuncionariosService;
        static $inject = ["AngularTypeScriptDevmedia.Services.FuncionariosService"];
           constructor(FuncionariosService: AngularTypeScriptDevmedia.Interfaces
           .IFuncionariosService) {
            this.FuncionariosService = FuncionariosService;
        }
           listaFuncionarios: Array<AngularTypeScriptDevmedia.Interfaces
           .IDadosFuncionario>;
        getFuncionariosDestaque = () => {
               this.listaFuncionarios = this.FuncionariosService.getFuncionarios();
        }
    }
    angular.module("AngularTypeScriptDevmedia").
 controller("AngularTypeScriptDevmedia.controllers.FuncionarioController",
 FuncionarioController);
 }