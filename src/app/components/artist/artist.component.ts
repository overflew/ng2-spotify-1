import {Component, OnInit} from '@angular/core';
import {Album} from "../../album";
import {Artist} from "../../artist";
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit {
  id:string;
  artist:Artist[];
  albums:Album[];

  constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute) {
  }

  ngOnInit() {
    this._spotifyService
      .getArtist(this._route.snapshot.params['id'])
      .subscribe(artist=>this.artist = artist);

    this._spotifyService
      .getAlbums(this._route.snapshot.params['id'])
      .subscribe(albums=>this.albums = albums.items);
  }


}
