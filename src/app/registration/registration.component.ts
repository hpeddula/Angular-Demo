import { Component } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Author, mutation } from './types';

@Component({
    selector:'registration',
    templateUrl:'./registration.component.html'
    
})

export class RegistrationComponent{
    firstName:string='';
    lastName:string='';
    constructor(private apollo:Apollo){}

    saveRegistration(){
        alert(this.firstName+" "+ this.lastName);
        this.apollo.mutate({
            mutation: gql`
             mutation  createAuthor($firstName:String!,$lastName:String!){ 
                createAuthor(firstName:$firstName, lastName:$lastName) { firstName lastName }
             
            }
        `,variables: {
            firstName: this.firstName,
            lastName: this.lastName
        }}).subscribe();
        
    };
    
    
    
}