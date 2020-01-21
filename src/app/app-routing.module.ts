import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestListComponent } from './test-list/test-list.component';
import { LoginComponent } from './login/login.component';
import { LoginTestComponent } from './login-test/login-test.component';


const routes: Routes = [
    {path : 'test', component: TestListComponent},
    {path : 'login', component: LoginComponent},
    {path : 'logintest', component: LoginTestComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
