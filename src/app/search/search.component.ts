import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  city!: string;
  lat!: string;
  long!: string;
  weatherData: any;
  trackList: any[] = [];

  constructor(private toastr: ToastrService, private http: HttpClient, private router: Router) { }

  apiKey = '78f39802d77f27b91b66b4fc2e06c6d4';

  onSubmit() {

    interface TrackResponse {
      tracks: {
        title: string;
        subtitle: string;
        url: string;
        images: { coverart: string };
      }[];
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&lat=${this.lat}&lon=${this.long}&appid=${this.apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.main.temp >= 32) {
          this.toastr.success(`Temperature: ${data.main.temp}°C`, 'Temperatura do Clima');
          const options = {
            headers: new HttpHeaders({
              'X-RapidAPI-Key': '6d77f34de3msh1d31361f7e27309p1eaba8jsn7a4383baa007',
              'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }),
            params: { listId: 'genre-global-chart-7' }
          };
          this.http.get<TrackResponse>('https://shazam.p.rapidapi.com/charts/track', options)
            .subscribe(
              response => {
                const tracks = response.tracks.slice(0, 10);
                this.trackList = tracks.map(track => ({
                  title: track.title,
                  subtitle: track.subtitle,
                  url: track.url,
                  avatar: track.images.coverart
                }));
                this.router.navigate(['/rock-list'], { state: { tracks: this.trackList } });
              },
              error => console.error('Error:', error.status, error.statusText)
            );
        } else if (data.main.temp >= 24 && data.main.temp <= 32) {
          this.toastr.success(`Temperature: ${data.main.temp}°C`, 'Temperatura do Clima');
          const options = {
            headers: new HttpHeaders({
              'X-RapidAPI-Key': '6d77f34de3msh1d31361f7e27309p1eaba8jsn7a4383baa007',
              'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }),
            params: { listId: 'genre-global-chart-1' }
          };
          this.http.get<TrackResponse>('https://shazam.p.rapidapi.com/charts/track', options)
            .subscribe(
              response => {
                const tracks = response.tracks.slice(0, 10);
                this.trackList = tracks.map(track => ({
                  title: track.title,
                  subtitle: track.subtitle,
                  url: track.url,
                  avatar: track.images.coverart
                }));
                this.router.navigate(['/pop-list'], { state: { tracks: this.trackList } });
              },
              error => console.error('Error:', error.status, error.statusText)
            );
        } else if (data.main.temp >= 16 && data.main.temp < 24) {
          this.toastr.success(`Temperature: ${data.main.temp}°C`, 'Temperatura do Clima');
          const options = {
            headers: new HttpHeaders({
              'X-RapidAPI-Key': '6d77f34de3msh1d31361f7e27309p1eaba8jsn7a4383baa007',
              'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }),
            params: { listId: 'genre-global-chart-14' }
          };
          this.http.get<TrackResponse>('https://shazam.p.rapidapi.com/charts/track', options)
            .subscribe(
              response => {
                const tracks = response.tracks.slice(0, 10);
                this.trackList = tracks.map(track => ({
                  title: track.title,
                  subtitle: track.subtitle,
                  url: track.url,
                  avatar: track.images.coverart
                }));
                this.router.navigate(['/classic-list'], { state: { tracks: this.trackList } });
              },
              error => console.error('Error:', error.status, error.statusText)
            );
        }
        else if (data.main.temp < 16) {
          this.toastr.success(`Temperature: ${data.main.temp}°C`, 'Temperatura do Clima');
          const options = {
            headers: new HttpHeaders({
              'X-RapidAPI-Key': '6d77f34de3msh1d31361f7e27309p1eaba8jsn7a4383baa007',
              'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }),
            params: { listId: 'genre-global-chart-3' }
          };
          this.http.get<TrackResponse>('https://shazam.p.rapidapi.com/charts/track', options)
            .subscribe(
              response => {
                const tracks = response.tracks.slice(0, 10);
                this.trackList = tracks.map(track => ({
                  title: track.title,
                  subtitle: track.subtitle,
                  url: track.url,
                  avatar: track.images.coverart
                }));
                this.router.navigate(['/lofi-list'], { state: { tracks: this.trackList } });
              },
              error => console.error('Error:', error.status, error.statusText)
            );
        } else {
          this.toastr.success(`Temperature: ${data.main.temp}°C`, 'Temperatura do Clima');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
}
