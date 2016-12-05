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
var CursosComponent = (function () {
    function CursosComponent() {
        //interpolação
        this.nomePortal = 'Filipe.training'; //conteúdo da var nome
        //array para cursos
        this.cursos = ['Angular2', 'Java', 'Ext JS']; //cursos do portal
    }
    CursosComponent = __decorate([
        //Como a class vai ser um component é necessário que importamos o decorator do pacote core do angular
        core_1.Component({
            moduleId: module.id,
            selector: 'cursos-lista',
            /*template: `<h3> {{ nomePortal }} </h3>
            <ul>
                <li *ngFor="let curso of cursos">
                    {{ curso }}
                </li>
            </ul>
            `*/
            templateUrl: 'cursos.component.html' /*Para nao precisar colocar todo o código do template
            no decorator pode ser criado um novo arq. em html para fazer a funçao de template*/
        }), 
        __metadata('design:paramtypes', [])
    ], CursosComponent);
    return CursosComponent;
}());
exports.CursosComponent = CursosComponent;
//# sourceMappingURL=cursos.component.js.map