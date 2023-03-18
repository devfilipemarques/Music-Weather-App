import { Component, OnInit } from '@angular/core';
import { ListMusicService } from '../app.localstorage.module';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pop-list',
  templateUrl: './pop-list.component.html',
  styleUrls: ['./pop-list.component.css']
})
export class PopListComponent implements OnInit{

  trackList!: any[];

  listSaves!: any[];
  listmusic!: string[];
  city!: string;
  temp!: string;
  musicname!: string;
  cat!: string;
  tracks: any;

  constructor(private listMusicService: ListMusicService, private toastr: ToastrService) { }

  ngOnInit(): void {
    const state = window.history.state;
    if (state && state.tracks) {
      this.trackList = state.tracks;
    }
    this.listSaves = this.listMusicService.getlistSaves();
  }

  saveList(data: string) {
    this.listMusicService.saveListMusic(this.listmusic, this.temp, this.city, this.cat, this.musicname);
    this.listSaves = this.listMusicService.getlistSaves();
    this.toastr.success('Musica salva com sucesso!');
  }
}
