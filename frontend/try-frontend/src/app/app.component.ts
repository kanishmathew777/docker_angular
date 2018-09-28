import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App!';
  constructor(private myservice: MyserviceService) {}
  project = 'New projet';
  todaydate;
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
 }
}
