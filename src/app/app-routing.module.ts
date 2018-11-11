import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ListComponent } from './components/users/list/list.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: "", redirectTo: "/courses", pathMatch: "full", canActivate:[AuthGuard]},
  {path: "courses", component: CoursesComponent, canActivate:[AuthGuard] },
  {path: "courses/add", component: AddCourseComponent, canActivate:[AuthGuard]},
  {path: "courses/edit/:id", component: EditCourseComponent, canActivate:[AuthGuard]},
  {path: "users", component: ListComponent, canActivate:[AuthGuard]},
  {path: "users/add", component: AddUserComponent, canActivate:[AuthGuard]},
  {path: "users/edit/:id", component: EditUserComponent, canActivate:[AuthGuard]},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
