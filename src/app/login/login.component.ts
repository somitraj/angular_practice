import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { 
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  hide: boolean = true;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
   ngOnInit() {  
   }

   onSubmit() {
        if (this.loginForm.invalid) {
          return;
      }
      console.warn(this.loginForm.value);
      alert("Username: " + this.loginForm.value['username']);
      // this.loginForm.reset();
    }
}
