import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { isTerminatorFan } from './is-terminator-fan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      favouriteMovie: new FormControl('', [Validators.required, isTerminatorFan]),
    });
  }

  get username(): AbstractControl {
    return this.formGroup.get('username');
  }

  get password(): AbstractControl {
    return this.formGroup.get('password');
  }

  get email(): AbstractControl {
    return this.formGroup.get('email');
  }

  get favouriteMovie(): AbstractControl {
    return this.formGroup.get('favouriteMovie');
  }

  onCreateUser(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      this.router.navigate(['/']);
    }
  }
}
