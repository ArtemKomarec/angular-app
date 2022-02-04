import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  authToken?: string;
  profile?: any;
  error: string ='';

  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  logout() {
    this.authToken = undefined;
    this.profile = undefined;
    this.error = '';
  }

  getUser() {
    this.httpClient.get('http://localhost:3000/profile', { headers: { 'Authorization': `Bearer ${this.authToken}` } })
    .subscribe(
      (response: any) => {
        this.profile = response;
      }, (e) => {
        console.log('>>', e);
        this.error = 'Invalid. Try again'
      });
  }
}