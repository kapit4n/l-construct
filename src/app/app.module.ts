import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbListModule } from '@nebular/theme';
import { NbSidebarModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';

import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';
import { NbMenuModule } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService, NbDummyAuthStrategy } from '@nebular/auth';

import { AuthGuard } from "./guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbListModule,
    HttpClientModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbMenuModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbCheckboxModule,
    NbMenuModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbDummyAuthStrategy.setup({
          name: 'email'
        }),
      ],
      forms: {},
    }), 
  ],
  providers: [NbAuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
