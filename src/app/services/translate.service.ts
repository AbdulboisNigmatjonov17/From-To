import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private url = 'POST https://api.from-to.uz/api/v1/translate';

  constructor(private http: HttpClient) { }

  translateText(text: string, lang_from: string = 'auto', lang_to: string = 'en', resultCase: string = 'latin') {
    const body = {
      text,
      lang_from,
      lang_to,
      resultCase
    };
    console.log(body);
    return this.http.post(this.url, body);
  }
}
