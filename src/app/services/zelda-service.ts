import {inject, Service} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponseZelda} from "../common/models/zelda.model";

@Service()
export class ZeldaService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly URLBase = 'https://api.hyrule-compendium.com/v3/compendium/category/';

  getDataZelda(category: string): Observable<ApiResponseZelda>{
    return this.httpClient.get<ApiResponseZelda>(
      this.URLBase + category,
    )
  }
}
