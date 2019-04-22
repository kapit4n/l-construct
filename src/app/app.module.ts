import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbListModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';

import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService, NbDummyAuthStrategy } from '@nebular/auth';

import { NgxLoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent, NgxLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbListModule,
    HttpClientModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule.forRoot({
      strategies: [
        NbDummyAuthStrategy.setup({
          name: 'email'
        }),
      ],
      forms: {},
    }), 
  ],
  providers: [NbAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
