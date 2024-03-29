import { Component, OnInit } from '@angular/core';
import { ListMusicService } from '../app.localstorage.module';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

interface Track {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  avatar: string;
  trackId: string;
}

@Component({
  selector: 'app-music-gender',
  templateUrl: './music-gender.component.html',
  styleUrls: ['./music-gender.component.css']
})
export class MusicGenderComponent implements OnInit {

  trackList: Track[] = [];
  listSaves: any[] = [];
  selectedTrackIds: string[] = [];
  selectedTrackId: string | null = null;
  gender: string = '';
  track: any;

  constructor(private listMusicService: ListMusicService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const state = window.history.state;
    if (state && state.tracks) {
      this.trackList = state.tracks.map((track: Track) => {
        track.trackId = track.id; // Adiciona o id da música como trackId
        return track;
      });
      this.gender = state.gender; // Set the value of catg
    }
    this.listSaves = this.listMusicService.getlistSaves();
  }

  selectTrack(id: string): void {
    this.selectedTrackId = id;
  }

  saveList() {
    const data = window.history.state;
    // Use data variable
    const temp = data.temperature;
    const city = localStorage.getItem('cityName');
    const catg = this.gender;
    const selectedTrack = this.trackList.find(track => track.id === this.selectedTrackId);
    const title = selectedTrack && selectedTrack.title !== undefined ? selectedTrack.title : this.track.title;
    const listmusic = selectedTrack ? [selectedTrack.title] : [];

    if (city) {
      this.listMusicService.saveListMusic(title, temp.toString(), city, catg, listmusic);
      this.listSaves = this.listMusicService.getlistSaves();
      this.toastr.success('Música salva com sucesso!');
    } else {
      this.toastr.error('Por favor digite o nome da Cidade');
    }
  }
}
