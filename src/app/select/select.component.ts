import { Component } from '@angular/core';


@Component({
    selector:'app-select',
    templateUrl:'./select.component.html',
    styleUrls:['./select.component.css']
})

export class SelectComponent {
    players:any=[
        {id:1,name:'Virat Kohli'},
        {id:2,name:'Rohit Sharma'},
        {id:3,name:'MS Dhoni'}
    ];

}