import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from '@lib/components/menu-button/menu-button.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuService } from '@lib/services/menu/menu.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, MenuButtonComponent],
    templateUrl: './menu.component.html',
    animations: [
        trigger('menuAnimation', [
            state(
                'hidden',
                style({
                    opacity: 0,
                    transform: 'translateY(-20px)',
                    display: 'none',
                }),
            ),
            state(
                'visible',
                style({
                    opacity: 1,
                    transform: 'translateY(0)',
                    display: 'block',
                }),
            ),
            transition('hidden => visible', [style({ display: 'block' }), animate('300ms ease-out')]),
            transition('visible => hidden', [
                animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-20px)' })),
            ]),
        ]),
    ],
})
export class MenuComponent {
    menuVisible = false;
    private _event: Event | undefined;
    items = this._menuService.menuItems;

    constructor(private _menuService: MenuService) {}

    toggleMenu(): void {
        this.menuVisible = !this.menuVisible;
    }

    isMenuVisible(): string {
        return window.innerWidth > 1023 || this.menuVisible ? 'visible' : 'hidden';
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        this._event = event;
        if (window.innerWidth > 1023) {
            this.menuVisible = true;
        }
    }
}
