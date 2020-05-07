import { ILoginRequestPayload } from './../../models/auth.models';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionService } from './../../services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private loginService: SessionService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      rememberAccount: new FormControl(false)
    });
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value);
  }
}