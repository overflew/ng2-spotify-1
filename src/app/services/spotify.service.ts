import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private _searchUrl:string;
  private _artistUrl:string;
  private _albumsUrl:string;
  private _albumUrl:string;

  constructor(private _http:Http) {
  }

  searchMusic(str:string, type:string = 'artist') {
    this._searchUrl = `https://api.spotify.com/v1/search?query=${str}&offset=0&limit=20&type=${type}&market=US`;
    return this._http.get(this._searchUrl)
      .map(res=>res.json());
  }

  getArtist(id:string) {
    this._artistUrl = `https://api.spotify.com/v1/artists/${id}`;
    // console.log(this._artistUrl);
    return this._http.get(this._artistUrl)
      .map(res=>res.json());
  }

  getAlbums(artistId:string) {
    this._albumsUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    // console.log(this._albumsUrl);

    return this._http.get(this._albumsUrl)
      .map(res=>res.json());
  }

  getAlbum(albumId:string) {
    this._albumUrl = `https://api.spotify.com/v1/albums/${albumId}`;
    // console.log(this._albumUrl);

    return this._http.get(this._albumUrl)
      .map(res=>res.json());
  }
}
