import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMusicStorageComponent } from './list-music-storage/list-music-storage.component';
import { MusicGenderComponent } from './music-gender/music-gender.component';

const routes: Routes = [
  { path: 'music-list', component: ListMusicStorageComponent },
  { path: 'list-music', component: MusicGenderComponent },
  { path: 'list-rock', component: MusicGenderComponent },
  { path: 'list-classic', component: MusicGenderComponent },
  { path: 'list-pop', component: MusicGenderComponent },
  { path: 'list-lofi', component: MusicGenderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
