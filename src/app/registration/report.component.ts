import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Query, Author } from './types';
import { Observable } from 'rxjs/Observable';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
@Component({
    selector: 'report',
    templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit{
    authors: Author[];
    constructor(private apollo: Apollo) { }
    ngOnInit() {
        var res = this.apollo.watchQuery<Query>({
            query: gql`
            query findAllAuthors{
                
                    firstName
                    lastName
                
            }
        `,
        }).valueChanges.subscribe(({data, loading}) => this.authors = data.authors)

    }

}