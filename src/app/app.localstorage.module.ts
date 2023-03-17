import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListMusicService {

  constructor() { }

  saveListMusic(listmusic: string[], temp: string, city: string, cat: string, musicname: string) {
    const data = new Date().toLocaleDateString();
    const list = {
      data: data,
      temp: temp,
      city: city,
      cat: cat,
      musicname: musicname,
      music: listmusic
    };
    let listSaves = JSON.parse(localStorage.getItem('listSaves') || '[]');
    listSaves.push(list);
    localStorage.setItem('listSaves', JSON.stringify(listSaves));
  }

  getlistSaves(): any[] {
    return JSON.parse(localStorage.getItem('listSaves') || '[]');
  }

  deletelistSaves(data: string) {
    let listSaves = JSON.parse(localStorage.getItem('listSaves') || '[]');
    listSaves = listSaves.filter((list: { data: string; }) => list.data !== data);
    localStorage.setItem('listSaves', JSON.stringify(listSaves));
  }

}
