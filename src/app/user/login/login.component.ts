import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public myFormGroup: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.myFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl(''),
    });
  }

  onLoginClick(): void {
    this.router.navigate(['/app']);
  }

  onNewUserClick(): void {
    this.router.navigate(['/new-user']);
  }
}
