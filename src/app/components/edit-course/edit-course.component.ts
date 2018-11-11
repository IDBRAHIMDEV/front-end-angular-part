import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  form: FormGroup;
  constructor() { }

  ngOnInit() {
     
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }

}
