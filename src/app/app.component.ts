import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'fa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FoodAcidity';

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.populate();
  }
}
