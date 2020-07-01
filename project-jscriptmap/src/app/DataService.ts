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
  
  form(formdata: FormData): any {
    alert(JSON.stringify);
    return this.http.post('http://localhost:3000/forms', formdata);
  }

  getEvents():any{
    //alert(JSON.stringify);
    return this.http.get("http://localhost:3000/getevent");
  }
  
}
