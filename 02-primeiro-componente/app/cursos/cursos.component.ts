import { Component } from '@angular/core'; //Como a class vai ser um component é necessário que importamos o decorator do pacote core do angular

@Component({
    moduleId: module.id, /* É necessário pois o candidate do angular 2
    nao consegue achar o ar. 'cursos.component.html'.
    Quem vai fazer a atribuiçao do módulo é próprio System.JS*/
    selector: 'cursos-lista', //selector = tag
    /*template: `<h3> {{ nomePortal }} </h3>
    <ul>
        <li *ngFor="let curso of cursos">
            {{ curso }}
        </li>
    </ul>
    `*/
    templateUrl: 'cursos.component.html' /*Para nao precisar colocar todo o código do template 
    no decorator pode ser criado um novo arq. em html para fazer a funçao de template*/ 
})

export class CursosComponent {
//interpolação
    nomePortal = 'Filipe.training'; //conteúdo da var nome
//array para cursos
    cursos = [ 'Angular2', 'Java', 'Ext JS']; //cursos do portal

}