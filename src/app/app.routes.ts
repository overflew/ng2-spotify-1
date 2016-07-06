import {RouterConfig} from '@angular/router';
import {NoContent} from './no-content';
import {AboutComponent} from "./components/about/about.component";
import {SearchComponent} from "./components/search/search.component";
import {ArtistComponent} from "./components/artist/artist.component";
import {AlbumComponent} from "./components/album/album.component";

export const routes:RouterConfig = [
  {path: '', component: SearchComponent},
  {path: 'home', component: SearchComponent},
  // make sure you match the component type string to the require in asyncRoutes
  {path: 'about', component: AboutComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'album/:id', component: AlbumComponent},
  {path: '**', component: NoContent},
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes:AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  // 'AboutComponent': require('es6-promise-loader!./about')
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks:Array<IdleCallbacks> = [
  // asyncRoutes['AboutComponent'],
  // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
