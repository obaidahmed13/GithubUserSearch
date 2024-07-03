import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = "https://api.github.com/users"
  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer '
    });

    return this.http.get<any>(`${this.apiUrl}/${username}`, {headers})
  }
}
