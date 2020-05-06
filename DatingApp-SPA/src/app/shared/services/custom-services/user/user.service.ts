import { Injectable } from '@angular/core';
import { RootService } from '../../root-services/root.service';
import { User } from 'src/app/shared/models/user/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = {
    users: 'user',
    user: 'user'
  };
  constructor(private rootService: RootService) { }


  getUsers() {



    return this.rootService
      .getRoot(this.url.users);
  }

  getUser(id: number) {
    return this.rootService
      .getRoot(this.url.user + '/' + id);
  }

  updateUser(id: number, user: User) {
    return this.rootService
    .putRoot(this.url.user + '/' + id, user);
  }

}
