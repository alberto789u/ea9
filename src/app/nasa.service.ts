import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://api.chucknorris.io/jokes/categories';
  //private apiKey = '9YgkUeMw5gUfjVxv7yCxQCGTPOE1Rwk1dWqm1kWh'; // Reemplaza con tu API Key


  constructor(private http: HttpClient) { }

  getcategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  
  
}
