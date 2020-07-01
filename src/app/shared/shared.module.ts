import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToastSuccessComponent } from './components/toast-success/toast-success.component';
import { ToastWarningComponent } from './components/toast-warning/toast-warning.component';
import { ToastComponent } from './components/toast/toast.component';
import { ImpressivePipe } from './impressive.pipe';
import { TableSuccessDirective } from './table-success.directive';

@NgModule({
  declarations: [
    ImpressivePipe,
    TableSuccessDirective,
    ToastComponent,
    ToastSuccessComponent,
    ToastWarningComponent
  ],
  exports: [ImpressivePipe, TableSuccessDirective],
  imports: [CommonModule],
})
export class SharedModule { }
