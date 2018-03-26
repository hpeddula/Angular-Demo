import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes }  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule,Apollo } from 'apollo-angular';
import { HttpLinkModule,HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatProgressSpinnerModule,MatAutocompleteModule,MatFormFieldModule} from '@angular/material';
import { NgSelectModule } from '@ng-select/ng-select';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTitle } from './employee/employee.pipe';
import { SimpleComponent } from './other/simple.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './other/pnf.component';
import { RegistrationComponent } from './registration/registration.component'; 
import { ReportComponent } from './registration/report.component';
import { AuthorComponent } from './author/author.component';
import { AuthormComponent } from './author/authorm.component';
import {  FormComponent } from './form/form.component';
import { MatAutoComponent } from './form/matauto.component';
import { SelectComponent } from './select/select.component';
const appRoutes : Routes=[
  {path:'employee',component:EmployeeComponent,data: { title: 'Employees   List' }},
  {path:'home',component:HomeComponent},
  { path: '',component:FormComponent ,pathMatch: 'full'},
  {path:'**',component:PageNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,EmployeeTitle,SimpleComponent,HomeComponent,PageNotFoundComponent,RegistrationComponent,
    ReportComponent,AuthorComponent,AuthormComponent,FormComponent,MatAutoComponent,SelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true } ),
    HttpClientModule, 
    ApolloModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { 
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      // By default, this client will send queries to the
      // `/graphql` endpoint on the same host http://192.168.61.58:8080/graphql
      link: httpLink.create({ uri: 'https://1jzxrj179.lp.gql.zone/graphql' }),
      cache: new InMemoryCache()
    });
  }
}
