import { Component } from '@angular/core';          //Como a class vai ser um component é necessário que importamos o decorator do pacote core do angular

import { CursosService } from './cursos.service';   // Import da classe de serviço



@Component({                                        // Responsável por renderizar as informaçoes na tela para o usuário poder ver
    moduleId: module.id,                            // É necessário pois o candidate do angular 2 nao consegue achar o arquivo 'cursos.component.html'.
                                                    // Quem vai fazer a atribuiçao do módulo é próprio System.JS*/
    selector: 'cursos-lista',                       // Selector = nome da tag
    /*------------------------------------
    template: `<h3> {{ nomePortal }} </h3>
    <ul>
        <li *ngFor="let curso of cursos">
            {{ curso }}
        </li>
    </ul>
    -------------------------------------*/
    templateUrl: 'cursos.component.html',           // Para nao precisar colocar todo o código do template no decorator pode ser criado um novo arq. em html para fazer a funçao de template 
    providers: [CursosService]                      // Precisamos informar ao Angular 2 que queremos que injete a classe CursosService nesse componete 
})

export class CursosComponent {                      //Interpolação de Dados

    nomePortal = 'Filipe.training';                 // conteúdo da var nome
/*---------------------------------------
 aula #06
//array para cursos
    cursos = [ 'Angular2', 'Java', 'Ext JS'];       //cursos do portal
-----------------------------------------*/
    cursos: any;                                    //Atributo a ser populado
                                                    // Atributo local da classe

    constructor( cursosService: CursosService){     //Injeção de dependência = instanciar uma classe automaticamente
                                                    // constructor(var : tipo(CursosService))
        
     this.cursos = cursosService.getCursos();      // Chamada do método de Serviço
    }                                               // Fazendo referencia a var local, nosso atributo local da classe                           
                                                    // Fazendo referencia a var local, nosso atributo local da classe                           
}