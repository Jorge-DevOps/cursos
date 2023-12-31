import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gif.interface';

const PIPHY_API_KEY = "1YkmYSe9cDK5qKqcuyluOY0KdRyL2l9B"

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private serviceURL: string = "https://api.giphy.com/v1/gifs"

  constructor(private http: HttpClient) {
    this.readLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag); // Usar "!=="
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10); // Usar "slice" en lugar de "splice"
    this.saveLocalStorage();
  }

  private saveLocalStorage() {
    localStorage.setItem('tagsHistory', JSON.stringify(this._tagsHistory))
  }

  private readLocalStorage() {
    if (localStorage.getItem('tagsHistory')) {
      this._tagsHistory = JSON.parse(localStorage.getItem('tagsHistory')!)!
    }
    if (this._tagsHistory.length === 0) return
    this.searchTag(this._tagsHistory[0])


  }

  searchTag(tag: string) {

    if (tag.length === 0) return;
    this.organizeHistory(tag)
    const params = new HttpParams()
      .set('api_key', PIPHY_API_KEY)
      .set('limit', '10')
      .set('q', tag)


    this.http.get<SearchGifsResponse>(`${this.serviceURL}/search`, { params: params })
      .subscribe((response) => {
        this.gifList = response.data

      }
      )
  }

}
