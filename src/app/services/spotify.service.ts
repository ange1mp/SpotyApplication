import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify Services listo');
  }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDFhYw5LXcl4SiAU41p8aI3Kn74eIh7p05vIqp5n-nugt-a-gbJ8eV_umjV44ImU_nRgWHoKM1YOG0XoZM',
    });
    return this.http.get(URL, { headers });
  }

  getReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((info: any) => info.albums.items)
    );
  }

  getArtistas(artista: string) {
    return this.getQuery(`search?q=${artista}&type=artist&limit=20`).pipe(
      map((autor: any) => autor.artists.items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    /*.pipe(
      map((artista: any) => artista.artists.items) */
  }

  getTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((lista: any) => lista.tracks)
    );
  }
}
