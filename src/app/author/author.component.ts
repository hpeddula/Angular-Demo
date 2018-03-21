import { Component,OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Observable';
import { Post, Query } from './types';
@Component({
    selector:'author',
    templateUrl:'./author.component.html',
    styleUrls:['./author.component.css']
})

export class AuthorComponent implements OnInit{
    posts :Observable<Post[]>;
    constructor(private apollo:Apollo){}
    ngOnInit(){
    // var res=this.apollo.watchQuery<any>({
    //     query:

    // })
}
}