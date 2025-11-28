import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Languages, TranslateResponse } from '../models/Models';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private translateURL = 'https://api.from-to.uz/api/v1/translate';
  private transliterateURL = 'https://api.from-to.uz/api/v1/translate';
  private languagesURL = 'https://cdn.from-to.uz/languages.json';

  constructor(private http: HttpClient) { }

  getLanguages() {
    return this.http.get<Languages[]>(this.languagesURL);
  }

  transliterateText(text: string | null, lang_from: string, lang_to: string) {
    const body = {
      body: {
        text,
        lang_from,
        lang_to
      }
    };
    console.log(body);
    return this.http.post<TranslateResponse>(this.transliterateURL, body);
  }
  translateText(
    text: string | null,
    lang_from: string,
    lang_to: string,
    resultCase: string | null
  ) {
    const body = {
      body: {
        text,
        lang_from,
        lang_to,
        resultCase
      }
    };
    console.log(body);
    return this.http.post<TranslateResponse>(this.translateURL, body);
  }
}