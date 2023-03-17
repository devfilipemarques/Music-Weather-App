import { Component, OnInit } from '@angular/core';
import { ListMusicService } from '../app.localstorage.module';

@Component({
  selector: 'app-list-music-storage',
  templateUrl: './list-music-storage.component.html',
  styleUrls: ['./list-music-storage.component.css']
})

export class ListMusicStorageComponent implements OnInit {

  temp!: string;
  city!: string;
  catg!: string;
  musics!: string[];

  listSaves!: any[];

  constructor(private listMusicService: ListMusicService) { }

  ngOnInit(): void {
    this.listSaves = this.listMusicService.getlistSaves();
  }

  deleteList(data: string) {
    if (confirm('Deseja realmente excluir esta lista?')){
      this.listMusicService.deletelistSaves(data);
      this.listSaves = this.listMusicService.getlistSaves();
    }
  }

}
