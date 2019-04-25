import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HumanResourceModule } from './human-resource/human-resource.module';
import { CrmModule } from './crm/crm.module';
import { BiModule } from './bi/bi.module';
import { FinanceModule } from './finance/finance.module';
import { InventoryModule } from './inventory/inventory.module';
import { ScmModule } from './scm/scm.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HumanResourceModule,
    CrmModule,
    BiModule,
    FinanceModule,
    InventoryModule,
    ScmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
