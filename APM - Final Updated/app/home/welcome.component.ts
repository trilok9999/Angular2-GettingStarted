

import { Component } from '@angular/core';

@Component({
    selector: 'simple-chart-example',
    templateUrl: 'app/home/welcome.component.html',
    styleUrls : ['app/home/welcome.component.css']
})
export class WelcomeComponent {
    constructor() {
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    }
    options: Object;
}