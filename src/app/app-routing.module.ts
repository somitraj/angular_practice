import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestListComponent } from './test-list/test-list.component';
import { LoginComponent } from './login/login.component';
import { LoginTestComponent } from './login-test/login-test.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { EditDialogueComponent } from './edit-dialogue/edit-dialogue.component';


const routes: Routes = [
    {path : 'test', component: TestListComponent},
    {path : 'login', component: LoginComponent},
    {path : 'logintest', component: LoginTestComponent},
    {path : 'viewdata', component: ViewDataComponent},
    {path : 'edit', component: EditDialogueComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
