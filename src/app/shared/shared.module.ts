import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImpressivePipe } from './impressive.pipe';
import { TableSuccessDirective } from './table-success.directive';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [ImpressivePipe, TableSuccessDirective, ToastComponent],
  exports: [ImpressivePipe, TableSuccessDirective],
  imports: [CommonModule],
})
export class SharedModule {}
