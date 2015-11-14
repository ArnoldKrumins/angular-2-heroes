
import {User} from '../models/user';
/**
 * Created by arnoldkrumins on 13/11/2015.
 */
export class DataService{

     users:Array<any>;

    constructor(){
        this.users = [
            {name:'Arnold'},
            {name:'Amie'}
        ];
    }


    get(){
        return this.users;
    }

}