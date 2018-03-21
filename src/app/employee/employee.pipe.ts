import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name : 'empTitle'
})

export class EmployeeTitle implements PipeTransform{
    transform(value:string,gender:string):string{
        if(gender.toLowerCase() == 'male'){
            return 'Mr.'+value;

        }
        else{
            return 'Ms.'+value;
        }
    }
}