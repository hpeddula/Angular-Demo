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
    posts :Post[];
    values:string;
    click(event:any){
        this.values += event.target.value+'|';
    }
    constructor(private apollo:Apollo){}
    ngOnInit(){
    var res=this.apollo.watchQuery<Query>({
        query:gql`
        query posts{
            posts{
                id
                title
                votes
               author{
                   id
                   firstName
                   lastName
               }
            }
        }
        `,

    }).valueChanges.subscribe(({data})=>this.posts=data.posts)
}

}