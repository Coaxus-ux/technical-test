import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-menu-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './menu-button.component.html',
})
export class MenuButtonComponent {
    @Input() iconClass = '';
    @Input() title = '';
    @Input() routerLink = '';
    @Input() itemsQuantity? = 0;
}
