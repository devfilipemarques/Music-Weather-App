import { Component, OnInit } from '@angular/core';
import { ListMusicService } from '../app.localstorage.module';

@Component({
  selector: 'app-list-music-storage',
  templateUrl: './list-music-storage.component.html',
  styleUrls: ['./list-music-storage.component.css']
})

export class ListMusicStorageComponent implements OnInit {
  listSaves!: any[];

  constructor(private listMusicService: ListMusicService) { }

  ngOnInit(): void {
    this.listSaves = this.listMusicService.getlistSaves();
  }

  deleteList(id: string) {
    if (confirm('Deseja realmente excluir esta lista?')){
      let listSaves = JSON.parse(localStorage.getItem('listSaves') || '[]');
      listSaves = listSaves.filter((list: { id: string }) => list.id !== id);
      localStorage.setItem('listSaves', JSON.stringify(listSaves));
      this.listSaves = listSaves;
    }
  }

}
