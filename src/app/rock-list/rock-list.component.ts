import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-list',
  templateUrl: './rock-list.component.html',
  styleUrls: ['./rock-list.component.css']
})
export class RockListComponent implements OnInit {

  trackList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const state = window.history.state;
    if (state && state.tracks) {
      this.trackList = state.tracks;
    }
  }

}
