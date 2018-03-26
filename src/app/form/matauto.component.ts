import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
    selector:'app-auto',
    templateUrl:'./matauto.component.html',
    styleUrls:['./matauto.component.css'],
    
})

export class MatAutoComponent{
    options = [
        'One',
        'Two',
        'Three'
       ];
}