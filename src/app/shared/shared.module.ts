import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImpressivePipe } from './impressive.pipe';
import { TableSuccessDirective } from './table-success.directive';

@NgModule({
  declarations: [ImpressivePipe, TableSuccessDirective],
  exports: [ImpressivePipe, TableSuccessDirective],
  imports: [CommonModule],
})
export class SharedModule {}
