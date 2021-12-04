import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService as RandomUserService } from 'src/app/random-user/services/user-service/user.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private randUserService: RandomUserService,
  ) { }

  public getUser(): Observable<User> {
    return this.randUserService.getRandomUser().pipe(
      map(({ results }) => {
        const randUser = results[0];
        let ret: User = {
          name: `${ randUser.name.first } ${ randUser.name.last }`,
          email: randUser.email,
          birthday: new Date(randUser.dob.date),
          address: randUser.location,
          phone_number: randUser.phone,
          password: randUser.login.password,
          picture: randUser.picture.large,
        };

        return ret;
      })
    )
  }
}
