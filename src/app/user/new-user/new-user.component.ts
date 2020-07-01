import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/toast.service';
import { ToastSuccessComponent } from 'src/app/shared/components/toast-success/toast-success.component';
import { ToastWarningComponent } from 'src/app/shared/components/toast-warning/toast-warning.component';

import { isTerminatorFan } from './is-terminator-fan';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private router: Router,
    private toastService: ToastService
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
    let toast = null;
    let message = '';
    if (this.formGroup.valid) {
      toast = ToastSuccessComponent;
      message = 'The requested operation was successfully completed.';
    } else {
      toast = ToastWarningComponent;
      message = 'Form validation failed, please review your input.';
    }
    this.toastService.openToast(toast, message);
    // Allow toast to be rendered before component removal
    setTimeout(() => this.router.navigate(['/']), 100);
    this.router.navigate(['/']);
  }
}
