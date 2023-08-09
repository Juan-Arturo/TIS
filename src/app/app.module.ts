import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/Components/header/header.component';
import { FooterComponent } from './shared/Components/footer/footer.component';
import { ContentComponent } from './shared/Components/content/content.component';
import { PanelComponent } from './pages/panel/panel.component';
import { HomeComponent } from './pages/Panel/home/home.component';
import { AboutComponent } from './pages/Panel/about/about.component';
import { ServiceComponent } from './pages/Panel/service/service.component';
import { ContactComponent } from './pages/Panel/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PanelComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
