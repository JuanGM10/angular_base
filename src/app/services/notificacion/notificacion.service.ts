import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificacionComponent } from './notificacion.component';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(private snackBar: MatSnackBar) { }

  error(message: string): void {
    this.snackBar.openFromComponent(NotificacionComponent, {
      duration: 3000,
      data: { message },
      panelClass: ['mat-snackbar_error']
    });

  }

  success(message: string): void{
    this.snackBar.openFromComponent(NotificacionComponent, {
      duration: 3000,
      data: { message },
      panelClass: ['mat-snackbar_success']
    });

  }
}
