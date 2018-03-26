import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector:'app-form',
    templateUrl:'./form.component.html'
})

export class FormComponent{
    values:string;
    department:any=['EA','ET','OPS']
    depts: string;
    firstName: string;
    LastName: string;
    saveData(formData:NgForm){
        console.log(formData);
    }
    click(event:any){
        this.values=event.target.value;
    }
}