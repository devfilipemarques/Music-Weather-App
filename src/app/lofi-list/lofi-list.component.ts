import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lofi-list',
  templateUrl: './lofi-list.component.html',
  styleUrls: ['./lofi-list.component.css']
})
export class LofiListComponent implements OnInit{
  trackList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const state = window.history.state;
    if (state && state.tracks) {
      this.trackList = state.tracks;
    }
  }
}
