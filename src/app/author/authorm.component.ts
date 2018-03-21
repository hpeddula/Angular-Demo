import { Component ,Input} from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Mutation } from './types';

@Component({
    selector:'authorm',
    templateUrl:'./authorm.component.html'
})

export class AuthormComponent{
    @Input() postId:number
    @Input() votes:number
    constructor(private apollo:Apollo){}
    upVote(){
        this.apollo.mutate({
            mutation:gql`
            mutation upvotePost($postId :Int!){
                upvotePost(postId:$postId){
                    id
                    votes
                }
            }
            `,
            variables:{
                postId:this.postId,
            },
            optimisticResponse:{
                __typename:'Mutation',
                upvotePost:{
                    __typename:'Post',
                    id:this.postId,
                    votes:this.votes + 4
                }
            }
        }).subscribe()
    }
}