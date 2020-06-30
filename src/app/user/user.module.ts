import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
  declarations: [FavouritesComponent],
  exports: [FavouritesComponent],
  imports: [CommonModule],
})
export class UserModule {}
