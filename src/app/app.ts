import {bootstrap, Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {LoginTest} from "./login";
import {List} from '../app/directives/list';
import {DataService} from './services/dataService'

class Hero {
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ng-model)]="hero.name" placeholder="name">

        </div>
             <login></login>
             <list></list>
        `,
    directives: [FORM_DIRECTIVES,LoginTest,List]
})
class AppComponent {
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}


bootstrap(AppComponent,[DataService]);