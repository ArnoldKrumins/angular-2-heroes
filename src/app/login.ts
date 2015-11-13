/**
 * Created by arnoldkrumins on 13/11/2015.
 */
import {bootstrap, Component,FORM_DIRECTIVES} from 'angular2/angular2';

class user{
    name:string;
}

@Component({
    selector: 'login',
    directives:[FORM_DIRECTIVES],
    template: ` <div><input [(ng-model)]="user" type=\'text\'><button (click)="onClick(user)">Login</button></div>`
})
export class LoginTest {

    onClick(name){
        console.log(name);

    }

}


