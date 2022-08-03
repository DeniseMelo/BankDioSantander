import { FinalComponent } from './pages/final/final.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { BannerComponent } from './pages/banner/banner.component';
import { ContaConfiaComponent } from './pages/conta-confia/conta-confia.component';
import { PacotesPromocionaisComponent } from './pages/pacotes-promocionais/pacotes-promocionais.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CartoesComponent } from './pages/cartoes/cartoes.component';
import { ComoAbrirContaComponent } from './pages/como-abrir-conta/como-abrir-conta.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ContaConfiaComponent,
    PacotesPromocionaisComponent,
    CartoesComponent,
    ComoAbrirContaComponent,
    FinalComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCarouselModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
