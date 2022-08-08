import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificacionService } from './notificacion.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule
  ]
})
export class NotificacionModule {

  static forRoot(): ModuleWithProviders<NotificacionModule> {
    return {
      ngModule: NotificacionModule,
      providers: [
        NotificacionService
      ]
    };

  }

}
