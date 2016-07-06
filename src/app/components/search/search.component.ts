import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {Artist} from "../../artist";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
  searchStr:string;
  searchRes:Artist[];

  constructor(private _spotifyService:SpotifyService, private _router:Router) {
  }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res=> {
        console.log(res.artists.items);
        this.searchRes = res.artists.items;
      });
  }

  onClick(artist:Artist) {
    this._router.navigate(['/artist', artist.id]);
  }

  ngOnInit() {
  }


}
