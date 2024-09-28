import { Injectable } from '@angular/core';
import { IMenu } from '@lib/interfaces';
import { UsersService } from '@lib/services/users/users.service';
import { TaskService } from '@lib/services';
import { combineLatest } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    constructor(private _usersService: UsersService, private _taskService: TaskService) {
        this._initializeMenuQuantities();
    }

    menuList: IMenu[] = [
        {
            iconClass: 'icon-[fluent-emoji--house-with-garden]',
            title: 'Home',
            routerLink: '/',
            itemsQuantity: 0,
        },
        {
            iconClass: 'icon-[fluent-emoji--person-supervillain]',
            title: 'Users',
            routerLink: '/users',
            itemsQuantity: 0,
        },
    ];

    get menuItems(): IMenu[] {
        return this.menuList;
    }

    private _initializeMenuQuantities(): void {
        combineLatest([this._usersService.countUsers(), this._taskService.countOpenTasks()]).subscribe(
            ([userCount, taskCount]) => {
                this._updateMenuItemQuantity('Users', userCount);
                this._updateMenuItemQuantity('Home', taskCount);
            },
        );
    }

    private _updateMenuItemQuantity(title: string, quantity: number): void {
        const menuItem = this.menuList.find((item) => item.title === title);
        if (menuItem) {
            menuItem.itemsQuantity = quantity;
        }
    }
}
