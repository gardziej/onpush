import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    val: 123
  };
  new = this.data;
  flag: boolean = false;

  constructor() {
    setInterval(() => {
      this.data.val = Math.floor(Math.random() * 200) + 100;
      this.new = {... this.data};
      this.flag = !this.flag;
    }, 1000);
  }

}
