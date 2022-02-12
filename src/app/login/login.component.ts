import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  // options: FormGroup;
  // hideRequiredControl = new FormControl(false);

  constructor(private fb: FormBuilder) {
    // this.options = fb.group({
    //   hideRequired: this.hideRequiredControl
    // });
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
  


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }

}