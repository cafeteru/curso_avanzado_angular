import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/core/toast.service';
import { UserService } from 'src/app/core/user.service';
import { ToastWarningComponent } from 'src/app/shared/components/toast-warning/toast-warning.component';
import { UserLogin } from 'src/domain/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public myFormGroup: FormGroup;
  subscription: Subscription;

  constructor(
    private router: Router,
    private userService: UserService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    localStorage.clear();
    this.myFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl(''),
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onLoginClick(): void {
    const userLogin = this.myFormGroup.value as UserLogin;
    this.subscription = this.userService.login(userLogin).subscribe(
      () => {
        this.router.navigate(['/app']);
      },
      () => {
        const message = 'Error login.';
        this.toastService.openToast(ToastWarningComponent, message);
      }
    );
  }

  onNewUserClick(): void {
    this.router.navigate(['/new-user']);
  }
}
