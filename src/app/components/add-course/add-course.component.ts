import { UserService } from './../../services/user.service';
import { CourseService } from './../../services/course.service';
import { TagService } from './../../services/tag.service';
import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { Course } from 'src/app/models/course';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  
  imagePreview = null;
  course: Course = {
    title: "",
    price: 0,
    tags: null,
    author: "",
    date: "",
    isPublished: false
  }
  
  users: User[] = [];
  tags: Tag[] = [];
  form: FormGroup;
  constructor(
              private userService: UserService,
              private tagService: TagService, 
              private courseService: CourseService,
              private router: Router
             ) { }

  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      tags: new FormControl(null, { validators: [Validators.required] }),
      author: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required]
      }),
      price: new FormControl(null, { validators: [Validators.required] })
    });


    this.tagService.getTags().subscribe((tags: Tag[]) => {
      this.tags = tags;
      console.log(tags)
    })

    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      console.log(users)
    })
  }


  
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  submit() {
    if(this.form.valid) {
      console.log(this.form.value)
      this.courseService.createCourse(this.form.value).subscribe(res => {
        this.router.navigate(['/courses']);
      })
    }else {
      alert(0)
    }
  }


}
