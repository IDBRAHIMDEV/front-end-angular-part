import { CourseService } from './../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  myCourses: Course[] = [];
  constructor(private coursesService: CourseService) { }

  ngOnInit() {
     
    this.coursesService.getCourses().subscribe((courses: Course[]) => {
      this.myCourses = courses;
      console.log(courses);
    })

  }



}
