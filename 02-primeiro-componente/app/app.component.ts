import { Component } from '@angular/core';

import { MyFristComponent } from './primeiro/meu-primeiro.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <meu-primeiro-componente></meu-primeiro-componente>
    `,
    directives: [ MyFristComponent ]
})
export class AppComponent { }
