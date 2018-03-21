import { Component,Input,OnChanges,SimpleChanges,OnInit } from '@angular/core' ;

@Component({
    selector:'simple',
    template:`You Entered:{{simpleInput}}`
})
export class SimpleComponent  implements OnChanges,OnInit {
     @Input() simpleInput :string;
     ngOnChanges(changes:SimpleChanges){
         console.log(changes);
        // for(let prop in changes){
        //     let change = changes[prop];
        //     console.log(change);
        // }
     }
     ngOnInit(){
         console.log('Inside Init Method');
     }
}