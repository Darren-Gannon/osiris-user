import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/services/models/user';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent {

  @Input()
  public user?: User;

  public display: string = 'address';

  switchDisplay(displayName: string) {
    this.display = displayName;
  }
}
