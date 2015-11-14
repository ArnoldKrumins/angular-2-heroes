/**
 * Created by arnoldkrumins on 13/11/2015.
 */
import {bootstrap, Component,FORM_DIRECTIVES,NgFor} from 'angular2/angular2';
import {DataService} from '../services/dataService';
import {User} from '../models/user';



@Component({
    selector: 'list',
    directives:[FORM_DIRECTIVES,NgFor],
    template: `<div>
                    {{ this.dataService.get() }}
                    <button (click)="onClick()">Load Users</button>
                   <ul>
                    <li *ng-for="#user of users">
                      <span>{{ user.name }}</span>
                    </li>

                   </ul>
               </div>`
})
export class List {

     users:Array<Any> =[];

    constructor(public dataService:DataService){
        this.users = this.dataService.get();
    }


    onClick(){
        this.users = this.dataService.get();
    }

}