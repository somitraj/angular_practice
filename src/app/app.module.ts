import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestListComponent } from './test-list/test-list.component';
import { LoginComponent } from './login/login.component'; 
import { MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

import { MatPaginatorModule, 
         MatSortModule } from "@angular/material";

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule, 
  MatCardModule,
  MatInputModule,
  MatListModule
} from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginTestComponent } from './login-test/login-test.component';
import { ViewDataComponent } from './view-data/view-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    LoginComponent,
    LoginTestComponent,
    ViewDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule, 
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule, 
    MatSortModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule, 
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule, 
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
