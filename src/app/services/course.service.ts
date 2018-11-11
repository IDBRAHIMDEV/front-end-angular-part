import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
 
  getCourses() {
    return this.http.get("http://localhost:3000/api/courses");
  }


  createCourse(course: Course) {
    const courseData = new FormData();
    courseData.append("title", course.title);
    courseData.append("author", course.author);
    courseData.append("image", course.image, course.title);
    courseData.append('tags', JSON.stringify(course.tags));
    courseData.append("price", ''+course.price);

    return this.http.post("http://localhost:3000/api/courses", courseData);
  }
  
}
