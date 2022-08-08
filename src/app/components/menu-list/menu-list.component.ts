import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioEntity } from 'src/app/models/backend/usuario.entity';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<void>();

  @Input() isAuthorized !: boolean | null;
  @Input() user !: UsuarioEntity | null;

  @Output() signOut = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(): void{
    this.menuToggle.emit();
  }

  onSignOut(): void {
    this.signOut.emit();
  }

}
