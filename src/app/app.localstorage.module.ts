import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class ListMusicService {

  constructor() { }

  saveListMusic(title: string, temp: string, city: string, catg: string, music: string[]) {
    const data = new Date().toLocaleDateString();
    const list = {
      id: uuidv4(),
      data: data,
      temp: temp,
      city: city,
      catg: catg,
      title: title,
      music: music
    };
    let listSaves = JSON.parse(localStorage.getItem('listSaves') || '[]');
    listSaves.push(list);
    localStorage.setItem('listSaves', JSON.stringify(listSaves));
  }


  getlistSaves(): any[] {
    return JSON.parse(localStorage.getItem('listSaves') || '[]');
  }

  deletelistSaves(id: string): void {
    let savedMusics = this.getlistSaves();
    savedMusics = savedMusics.filter(list => list.id !== id);
    localStorage.setItem('listSaves', JSON.stringify(savedMusics));
  }

}
