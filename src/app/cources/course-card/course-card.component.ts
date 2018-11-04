import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  courses :any[] = ['Java','Angular js','Python'];
  myCourse :string = this.courses[0];;

  constructor() { 
  
  }
//https://angular.io/guide/displaying-data
  ngOnInit() {
  }

}
