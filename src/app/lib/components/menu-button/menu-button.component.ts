import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-menu-button',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './menu-button.component.html',
    styleUrls: ['./menu-button.component.css'],
})
export class MenuButtonComponent {
    @Input() iconClass = '';
    @Input() title = '';
    @Input() routerLink = '';
    @Input() itemsQuantity? = 0;
}
