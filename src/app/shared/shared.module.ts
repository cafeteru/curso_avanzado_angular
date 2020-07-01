import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToastSuccessComponent } from './components/toast-success/toast-success.component';
import { ToastWarningComponent } from './components/toast-warning/toast-warning.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { ImpressivePipe } from './impressive.pipe';
import { TableSuccessDirective } from './table-success.directive';

@NgModule({
  declarations: [
    ImpressivePipe,
    TableSuccessDirective,
    ToastSuccessComponent,
    ToastWarningComponent,
    FormFieldComponent
  ],
  exports: [
    ImpressivePipe,
    TableSuccessDirective,
    FormFieldComponent
  ],
  imports: [CommonModule],
  entryComponents: [
    ToastSuccessComponent,
    ToastWarningComponent,
  ]
})
export class SharedModule { }
