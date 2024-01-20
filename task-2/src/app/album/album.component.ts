import { Component, Input } from '@angular/core';
import { Album } from '../Models/Album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  @Input()
  album: Album;
}
