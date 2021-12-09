import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import { AuthService } from '@service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.authService.logout();
    this.validateForm = this.fb.group({
      account: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  submitForm(): void {
    const { valid, value, controls } = this.validateForm;
    if (valid) return this.authService.login(value);
    Object.values(controls).forEach((control) => {
      if (!control.invalid) return;
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    });
  }
}
