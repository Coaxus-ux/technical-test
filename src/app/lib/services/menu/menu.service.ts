import { Injectable } from '@angular/core';
import { IMenu } from '@lib/interfaces';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    menuList: IMenu[] = [
        {
            iconClass: 'icon-[fluent-emoji--house-with-garden]',
            title: 'Home',
            routerLink: '/',
            itemsQuantity: 10,
        },
        {
            iconClass: 'icon-[fluent-emoji--person-supervillain]',
            title: 'Users',
            routerLink: '/users',
        },
    ];

    get menuItems(): IMenu[] {
        return this.menuList;
    }
}
