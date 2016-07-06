import {Component, OnInit} from '@angular/core';
import {Album} from "../../album";
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";
// import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit {
  id:string;
  album:Album[];

  constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute) {
  }

  ngOnInit() {
    // console.log(this._route.snapshot.params['id']);
    this._spotifyService
      .getAlbum(this._route.snapshot.params['id'])
      .subscribe(album=> {
        this.album = album;
        console.log(this.album)
      });
  }


}
