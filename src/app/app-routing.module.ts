import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ListComponent } from './components/users/list/list.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "/courses", pathMatch: "full"},
  {path: "courses", component: CoursesComponent },
  {path: "courses/add", component: AddCourseComponent},
  {path: "courses/edit/:id", component: EditCourseComponent},
  {path: "users", component: ListComponent},
  {path: "users/add", component: AddUserComponent},
  {path: "users/edit/:id", component: EditUserComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
