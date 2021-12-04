import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomUserModule } from '../../random-user.module';
import { ResponsePayload } from './models/response-payload';
import { User } from './models/user';

@Injectable({
  providedIn: RandomUserModule
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getRandomUser(): Observable<ResponsePayload> {
    return this.http.get<ResponsePayload>('https://randomuser.me/api/')
  }
}
