import {Component, Input} from '@angular/core';
import {Course} from './course.model';

@Component({
    selector:`course`,
    templateUrl:`./course.component.html`,
    styleUrls:['./course.style.css']
})

export class CourseComponent{
     @Input()   coursedetails:Course=new Course("Angular",3);
     isFree:boolean=true;
     isHighlighted:boolean=false;

     IncrementLikes(){
         // change likes !
         this.coursedetails.likes++;
     }
}