import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getPosts(): any {

    return this.http.get('https://jsonplacehsir older.typicode.com/posts');

  }


  signUp(d): any {
    return this.http.post('http://localhost:3000/sign-up', d);
  }


  signIn(d): any {
    return this.http.post('http://localhost:3000/sign-in', d);
  }
  
  form(d): any {
    return this.http.post('http://localhost:3000/forms', d);
  }
  
}
