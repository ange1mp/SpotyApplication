import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NoimagenPipe } from '../../../pipes/noimagen.pipe';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
})
export class TarjetasComponent implements OnInit {
  @Input() items: any[] = [];

  constructor(private router: Router) {}

  verArtista(item: any) {
    let artistaID;
    if (item.type === 'artist') {
      artistaID = item.id;
    } else {
      artistaID = item.artists[0].id;
    }
    this.router.navigate(['/artista', artistaID]);
    return console.log(artistaID);
  }

  ngOnInit(): void {}
}
