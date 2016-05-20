import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
       <input type="text" class="{{'red'}}" value="{{onTest()}}">
       
    `,
})
export class AppComponent {
    onTest() {
        return 1 == 1;
    }
}