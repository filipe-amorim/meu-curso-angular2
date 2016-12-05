"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //Como a class vai ser um component é necessário que importamos o decorator do pacote core do angular
var cursos_service_1 = require('./cursos.service'); // Import da classe de serviço
var CursosComponent = (function () {
    // Atributo local da classe
    function CursosComponent(cursosService) {
        // constructor(var : tipo(CursosService))
        this.nomePortal = 'Filipe.training'; // conteúdo da var nome
        this.cursos = cursosService.getCursos(); // Chamada do método de Serviço
        // Fazendo referencia a var local, nosso atributo local da classe
    }
    CursosComponent = __decorate([
        // Import da classe de serviço
        core_1.Component({
            moduleId: module.id,
            // Quem vai fazer a atribuiçao do módulo é próprio System.JS*/
            selector: 'cursos-lista',
            /*------------------------------------
            template: `<h3> {{ nomePortal }} </h3>
            <ul>
                <li *ngFor="let curso of cursos">
                    {{ curso }}
                </li>
            </ul>
            -------------------------------------*/
            templateUrl: 'cursos.component.html',
            providers: [cursos_service_1.CursosService] // Precisamos informar ao Angular 2 que queremos que injete a classe CursosService nesse componete 
        }), 
        __metadata('design:paramtypes', [cursos_service_1.CursosService])
    ], CursosComponent);
    return CursosComponent;
}());
exports.CursosComponent = CursosComponent;
//# sourceMappingURL=cursos.component.js.map