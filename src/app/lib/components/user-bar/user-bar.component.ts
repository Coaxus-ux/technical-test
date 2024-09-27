import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-user-bar',
    standalone: true,
    imports: [CommonModule, RippleModule],
    templateUrl: './user-bar.component.html',
})
export class UserBarComponent {
    @Input() users = 0;
}
