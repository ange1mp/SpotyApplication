import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent {
  artista: any = {};
  tracks: any = {};
  mostrar: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.mostrar = true;
    this.router.params.subscribe((parametros) => {
      this.getArtista(parametros.id);
      this.mostrar = true;
      this.getTopTracks(parametros.id);
    });
  }

  getArtista(id: string) {
    this.mostrar = true;
    this.spotify.getArtista(id).subscribe((respuesta) => {
      console.log(respuesta);
      this.artista = respuesta;
      this.mostrar = false;
    });
  }

  getTopTracks(id: string) {
    this.mostrar = true;
    this.spotify.getTracks(id).subscribe((lista: any) => {
      console.log(lista);
      this.tracks = lista;
      this.mostrar = false;
    });
  }
}
