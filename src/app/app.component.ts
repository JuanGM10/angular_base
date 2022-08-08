import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsuarioEntity } from './models/backend/usuario.entity';
import * as fromRoot from './store';
import * as fromDictionaries from './store/dictionaries';
import * as fromUser from './store/usuario';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  user$ !: Observable<UsuarioEntity>;
  isAuthorized$ !: Observable<boolean>;

  title = 'FortesWeb';

  /**
   *
   */
  constructor(

  ) {
  }


}
