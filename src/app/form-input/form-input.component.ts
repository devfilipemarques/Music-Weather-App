import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})

export class FormInputComponent {
  cityName: string = '';
  latitude: string = '';
  longitude: string = '';
  temperature: string = '';

  constructor(private http: HttpClient) { }

  onSearch() {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=78f39802d77f27b91b66b4fc2e06c6d4`;
    this.http.get<any>(weatherUrl).subscribe(weatherResponse => {
      this.temperature = weatherResponse.main.temp;
      const headers = new HttpHeaders({
        'x-rapidapi-host': 'shazam.p.rapidapi.com',
        'x-rapidapi-key': 'SUA_CHAVE_API'
      });
      let musicUrl;
      // if (this.temperature > 32) {
      //   musicUrl = 'https://shazam.p.rapidapi.com/shazam-events/list?genre_ids=145&location=city';
      //   this.musicStyle = 'Rock';
      // } else if (this.temperature > 24) {
      //   musicUrl = 'https://shazam.p.rapidapi.com/shazam-events/list?genre_ids=113&location=city';
      //   this.musicStyle = 'Pop';
      // }
      // this.http.get<any>(musicUrl, { headers }).subscribe(musicResponse => {
      //   // Manipule a resposta da API de música aqui
      // });
    });
  }
}
