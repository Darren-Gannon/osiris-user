import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from './services/models/user';
import { UserService } from './services/user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private userService: UserService,
  ) { }

  private userSub?: Subscription;
  public user?: User;

  ngOnInit(): void { 
    const user$: Observable<User> = this.userService.getUser();
    this.userSub = user$.subscribe(user => this.user = user, console.warn)
  }

  ngOnDestroy(): void {
    this.user = undefined;
    this.userSub?.unsubscribe();
    this.userSub = undefined;
  }
}
