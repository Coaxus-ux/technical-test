import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UsersService } from '@lib/services/users/users.service';
import { IUser } from '@lib/interfaces/users/IUser';
import { UserBarComponent } from '@lib/components/user-bar/user-bar.component';
import { UserTableComponent } from '@lib/components/user-table/user-table.component';

@Component({
    selector: 'app-persons',
    standalone: true,
    imports: [CommonModule, TableModule, UserBarComponent, UserTableComponent],
    templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
    users: IUser[] = [];
    userQuantity = 0;

    constructor(private _usersService: UsersService) {}

    ngOnInit(): void {
        this._usersService.getUsers().subscribe((data: IUser[]) => {
            this.users = data;
        });
        this._usersService.countUsers().subscribe((data: number) => {
            this.userQuantity = data;
        });
    }
}
