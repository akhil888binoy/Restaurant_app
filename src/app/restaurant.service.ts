import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>("http://localhost:3000/Restaurants");
  }
  create(payload: Restaurant):Observable<Restaurant[]>{
      return this.http.post<Restaurant[]>("http://localhost:3000/Restaurants",payload)

  }
    getbyId(id:number):Observable<Restaurant>{
        return this.http.get<Restaurant>(`http://localhost:3000/Restaurants/${id}`);
    }
    update(payload:Restaurant):Observable<Restaurant>{
        return this.http.put<Restaurant>(`http://localhost:3000/Restaurants/${payload.id}`, payload);
    }

}

