import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'exemplo-data-biding',
    templateUrl: 'data-binding.component.html'
})
export class DataBindingComponent{
    constructor() { }

   
}


// 4 tipos de data Binding no angular 2
// 
//  1 - Interpolaçao:           Valor do Component para o template
//  2 - Binding de propriedade: Valor do component para o template        
//  3 - Binding de Eventos:     Evento enviados do template para o component (IBIT Bingind) - clique de botao
//  4 - Junçao de binding de propriedade com eventos
