import { Injectable } from '@angular/core';
import { IUser } from '@lib/interfaces/users/IUser';
import { users } from '@lib/utils/initdb';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private _users: IUser[] = users;

    getUsers(): Observable<IUser[]> {
        return of(this._users);
    }
}
