import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = this.http.get<any[]>('http://localhost:4201');
  // users = this.http.get<any[]>('http://localhost:4201/users');

  

  constructor(private http: HttpClient) {}

  post() {
    let user = {
      username: "Jim",
      password: "Jim"
    }
    //console.log(user)
    this.http.post<any>('http://localhost:4201/users', user)
    .subscribe(next => console.log(next));
  }
  
}
