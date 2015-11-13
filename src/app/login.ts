/**
 * Created by arnoldkrumins on 13/11/2015.
 */
import {bootstrap, Component,FORM_DIRECTIVES} from 'angular2/angular2';

class User{
    name:string;
}

@Component({
    selector: 'login',
    directives:[FORM_DIRECTIVES],
    template: ` <div><input [(ng-model)]="user.name" type=\'text\'><button (click)="onClick(user)">Login</button>{{ user.name }}</div>`
})
export class LoginTest {

    public user : User = {
        name: 'Arnold'
    };


    onClick(user){
        console.log(user.name);

    }

}


