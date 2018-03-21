import { Component } from '@angular/core';
import {IEmployee} from './employee';
@Component({
    selector:'emp',
    template:`<h1>This is nested component Demo {{ name}}
                <input [(ngModel)]='name'/>
                <p>{{name}}</p>
                <img *ngIf='showImage' [src]='source'/>
                <button class="btn btn-primary" (click)=toggleValue()>{{showImage ? 'Hide' :'Show'}} Image</button>
                <table>
    <thead>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Annual Salary</th>
            <th>Date of Birth</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor='let employee of employees'>
            <td>{{employee.code}}</td>
            <td>{{employee.name|empTitle:employee.gender}}</td>
            <td>{{employee.gender}}</td>
            <td>{{employee.annualSalary}}</td>
            <td>{{employee.dateOfBirth}}</td>
        </tr>
        <tr *ngIf="!employees || employees.length==0">
            <td colspan="5">
                No employees to display
            </td>
        </tr>
    </tbody>
</table>`,
    styleUrls:['employee.component.css']
   
})
export class EmployeeComponent{
    name : string='Harsha';
    source ='http://spacenews.com/wp-content/uploads/2018/02/fh-launch-spx.jpg';
    showImage :boolean=false;
    employees: IEmployee[];
    constructor() {
        this.employees = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '25/6/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '14/10/1980'
            },
        ];
    }

    getAlert():void{
        alert("Hello this is an alert");
    }
    toggleValue(){
        this.showImage = !this.showImage;
    }
}