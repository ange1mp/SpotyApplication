import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  canciones: any[] = [];
  loading: boolean = true;
  mensajeError: string;
  constructor(private spoty: SpotifyService) {
    this.spoty.getReleases().subscribe((temas) => {
      this.canciones = temas;
      this.loading = false;
    });
  }
}

/*console.log(temas.albums.items);*/
