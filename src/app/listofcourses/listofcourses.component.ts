import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-listofcourses',
  templateUrl: './listofcourses.component.html',
  styleUrls: ['./listofcourses.component.css']
})
export class ListofcoursesComponent implements OnInit {

  title = 'shoppingcartapp';
  companyName:string="";
  courseToBeSearched:string="";
  newCourse:Course = new Course();
  ImageUrl:string ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
  courses:Course[]=[
    new Course("Angular",5,5000,4,"Dinesh","https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",200),
    new Course("Node",3,5000,4,"Boopathi","https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png",100),
  
  new Course("React",4,8000,3.6780,"Krishnan","https://cdn-images-1.medium.com/max/2000/1*kt9otqHk14BZIMNruiG0BA.png",300)
];

AddNewCourse(theForm){

  if(theForm.valid){
    this.courses.push(this.newCourse);
    this.newCourse = new Course();// clear textbox bindings and 
    //make newCourse point to a different Object !
  }

   
}

  ngOnInit() {
  }

}
