/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
module AngularTypeScriptDevmedia {
    export class Routes {
      static $inject = ["$routeProvider"];
      static configureRoutes($routeProvider: ng.route.IRouteProvider) {
          $routeProvider.when("/home",
             {
                 controller: "AngularTypeScriptDevmedia.controllers.FuncionarioController",
                 templateUrl: "/app/views/funcionarios.html",
                 controllerAs: "funcionario"
              });
          $routeProvider.otherwise({ redirectTo: "/home" });
    }
    }
  }