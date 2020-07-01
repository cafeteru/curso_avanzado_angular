import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './header/header.component';
import { MovieModule } from './movie/movie.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserModule } from './user/user.module';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MovieModule,
    UserModule,
    OverlayModule,
    HttpClientModule,
    CoreModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('access_token'),
        whitelistedDomains: ['movies-backend-treetechnology.herokuapp.com'], // Only send token to movies-backend API
        blacklistedRoutes: ['https://movies-backend-treetechnology.herokuapp.com/api/auth/*'], // Do not send the token for the auth routes
      },
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
