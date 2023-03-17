import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { RockListComponent } from './rock-list/rock-list.component';
import { PopListComponent } from './pop-list/pop-list.component';
import { ClassicListComponent } from './classic-list/classic-list.component';
import { LofiListComponent } from './lofi-list/lofi-list.component';
import { ListMusicStorageComponent } from './list-music-storage/list-music-storage.component';


@Injectable({
  providedIn: 'root'
})

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RockListComponent,
    PopListComponent,
    ClassicListComponent,
    LofiListComponent,
    ListMusicStorageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private url = 'https://shazam.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  public getCharts(): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '6d77f34de3msh1d31361f7e27309p1eaba8jsn7a4383baa007',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    });

    const options = {
      headers: headers,
      params: {
        listId: 'genre-global-chart-7'
      }
    };

    return this.http.get(`${this.url}/charts/track`, options);
  }
}
