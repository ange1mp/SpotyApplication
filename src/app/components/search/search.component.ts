import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  cantante: any[] = [];
  loading: boolean;

  constructor(private spoty: SpotifyService) {}
  buscar(termino: string) {
    this.loading = true;
    this.spoty.getArtistas(termino).subscribe((autor: any) => {
      this.cantante = autor;
      this.loading = false;
    });
  }
}
