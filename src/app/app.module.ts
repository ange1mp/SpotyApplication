import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* RUTAS */
import { ROUTING } from './app.routes';

/* PETICIONES HHTP */
import { HttpClientModule } from '@angular/common/http';

/* SERVICIOS */
import { SpotifyService } from './services/spotify.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NoimagenPipe } from './pipes/noimagen.pipe';
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagenPipe,
    DomseguroPipe,
    TarjetasComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, ROUTING, HttpClientModule],
  providers: [SpotifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
