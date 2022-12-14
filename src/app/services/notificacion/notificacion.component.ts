import { Component, Inject, OnInit } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';


export interface Notification {
  message: string;
}


@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss']
})
export class NotificacionComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: Notification) { }

  ngOnInit(): void {
  }

}
