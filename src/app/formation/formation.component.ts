import { Component } from '@angular/core';

@Component({
    selector: 'app-formation',
    templateUrl: './formation.component.html',
})

export class FormationComponent {
    welcome: string;
    constructor() {
        this.welcome = "Formation page";
    };
};
