import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/core/toast.service';
import { UserService } from 'src/app/core/user.service';
import { ToastSuccessComponent } from 'src/app/shared/components/toast-success/toast-success.component';
import { ToastWarningComponent } from 'src/app/shared/components/toast-warning/toast-warning.component';
import { UserData } from 'src/domain/user-data';

import { isTerminatorFan } from './is-terminator-fan';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  subscription: Subscription;

  constructor(
    private router: Router,
    private toastService: ToastService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      favouriteMovie: new FormControl('', [Validators.required, isTerminatorFan]),
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
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
    let message = '';
    if (this.formGroup.valid) {
      const user = this.formGroup.value as UserData;
      this.subscription = this.userService.createUser(user).subscribe(() => {
        message = 'The requested operation was successfully completed.';
        this.toastService.openToast(ToastSuccessComponent, message);
        setTimeout(() => this.router.navigate(['/']), 100);
        this.router.navigate(['/']);
      },
        (errorResponse) => {
          this.toastService.openToast(
            ToastWarningComponent, errorResponse.error.message);
        });

    } else {
      message = 'Form validation failed, please review your input.';
      this.toastService.openToast(ToastWarningComponent, message);
    }
  }
}
