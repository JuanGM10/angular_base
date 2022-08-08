import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsuarioEntity } from 'src/app/models/backend/usuario.entity';

import * as fromRoot from 'src/app/store';
import * as fromDictionaries from 'src/app/store/dictionaries';
import * as fromUser from 'src/app/store/usuario';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  user$ !: Observable<UsuarioEntity>;
  isAuthorized$ !: Observable<boolean>;
  constructor(   private store: Store<fromRoot.State>,
    private router: Router) { }


  ngOnInit(): void {
    this.user$ = this.store.pipe(select(fromUser.getUser)) as Observable<fromUser.UserResponse>;
    this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized)) as Observable<boolean>;

    this.store.dispatch(new fromDictionaries.Read());

    this.store.dispatch(new fromUser.Init());

  }

  onSignOut(): void {
    localStorage.removeItem('token');
    this.store.dispatch(new fromUser.SignOut());
    this.router.navigate(['/auth/login']);
  }

}
