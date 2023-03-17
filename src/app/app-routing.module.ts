import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RockListComponent } from './rock-list/rock-list.component';
import { PopListComponent } from './pop-list/pop-list.component';
import { ClassicListComponent } from './classic-list/classic-list.component';
import { LofiListComponent } from './lofi-list/lofi-list.component';
import { ListMusicStorageComponent } from './list-music-storage/list-music-storage.component';

const routes: Routes = [
  { path: 'rock-list', component: RockListComponent },
  { path: 'pop-list', component: PopListComponent },
  { path: 'classic-list', component: ClassicListComponent },
  { path: 'lofi-list', component: LofiListComponent },
  { path: 'music-list', component: ListMusicStorageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
