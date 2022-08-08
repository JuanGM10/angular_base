import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioEntity } from 'src/app/models/backend/usuario.entity';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuClicked = new EventEmitter();
  @Input() isAuthorized !: boolean | null;
  @Input() user !: UsuarioEntity | null;

   userOk !: UsuarioEntity | null;

  @Output() signOut = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
    this.userOk = {
      id: "0",
      admin: true,
      apellido: "Guerra Meneses",
      email: "admin@guerra.me",
      imagen: "",
      nombre: "Juan Luis",
      username: "jamuis",
      token: "",
      rol: "Administrador"
    }
  }

  onClicked() : void {
    this.menuClicked.emit();
  }

  onSignOut(): void {
    this.signOut.emit();
  }


}
