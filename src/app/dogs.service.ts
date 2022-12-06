import { Injectable } from '@angular/core';
import{imgDog} from './imgDog';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) {}

    private urlDogs= 'https://dog.ceo/api/breeds/image/random'

    msDogs(): Observable<imgDog>{
      return this.http.get<imgDog>(this.urlDogs)

   }
}
