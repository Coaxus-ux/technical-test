import { Injectable } from '@angular/core';
import { IUser } from '@lib/interfaces/users/IUser';
import { users } from '@lib/utils/initdb';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private _users: IUser[] = users;
    private _usersSubject: BehaviorSubject<IUser[]> = new BehaviorSubject(this._users);

    getUsers(): Observable<IUser[]> {
        return this._usersSubject.asObservable();
    }

    countUsers(): Observable<number> {
        return of(this._users.length);
    }

    addUser(user: IUser): void {
        user.id = this._users.length + 1;
        user.avatarSeed = Math.floor(Math.random() * 100);
        this._users.push(user);
        this._usersSubject.next(this._users);
    }
}
