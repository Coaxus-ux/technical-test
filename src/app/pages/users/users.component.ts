import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UsersService } from '@lib/services/users/users.service';
import { IUser } from '@lib/interfaces/users/IUser';

@Component({
    selector: 'app-persons',
    standalone: true,
    imports: [CommonModule, TableModule],
    templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
    users: IUser[] = [];

    constructor(private _usersService: UsersService) {}

    ngOnInit(): void {
        this._usersService.getUsers().subscribe((data: IUser[]) => {
            this.users = data;
        });
    }
}
