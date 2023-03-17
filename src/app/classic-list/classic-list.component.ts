import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classic-list',
  templateUrl: './classic-list.component.html',
  styleUrls: ['./classic-list.component.css']
})
export class ClassicListComponent implements OnInit{
  trackList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const state = window.history.state;
    if (state && state.tracks) {
      this.trackList = state.tracks;
    }
  }
}
