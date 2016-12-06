import { Injectable } from '@angular/core';     // Decorator: Injectable do @angula/core
                                                // Responsável: Por importar a classe


@Injectable()                                   // Decorar a classe serviços
                                                // Esta pronto para ser injetada em uma outra classe
                                                // Objetivo: Injetar a classe dentro do construtor(){}
export class CursosService {
    getCursos(){
        return ['Angular 2', 'Java', 'Ext JS','Estrutura de Dados'];
    }
}

/*----------------------------------------------------------------- 
    Classe do tipo Servico é a comunicaçao do frontend com backend
-----------------------------------------------------------------*/

/*---------------------------
    Repare na convensao de nome
nome do arquivo: app/cursos cursos.service.ts
class: CursosService 
----------------------------*/

/*-------------------------------------
    Primero: Cria o serviço
    Segundo: Importa o serviço no cursos.component.ts
    Terceiro: atributo local a ser populado (colocar em baixo do export class)
    Quarto:   Injeção de dependencia (instânciamento automático na memória)
    Quinto: Chamada do método de serviço 
---------------------------------------*/