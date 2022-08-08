import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from 'src/app/store';
import * as fromUser from 'src/app/store/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form !: FormGroup;
  loading$ !: Observable<boolean | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {

    console.log('fasfasf');

    this.loading$ = this.store.pipe(select(fromUser.getLoading));

    this.form = this.fb.group({
      email: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.maxLength(128),
        ]
      }],
      password: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
        ]
      }],
    })


  }




  onSubmit(): void {

    if (this.form.valid) {
      const value = this.form.value;

      const userLoginRequest: fromUser.EmailPasswordCredentials = {
        email: value.email,
        password: value.password,
      }

      this.store.dispatch(new fromUser.SignInEmail(userLoginRequest));

    } else {
      this.form.markAsTouched();
    }


  }
}
