import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '@lib/interfaces';
import { RippleModule } from 'primeng/ripple';
@Component({
    selector: 'app-user-table',
    standalone: true,
    imports: [CommonModule, RippleModule],
    templateUrl: './user-table.component.html',
    styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent {
    @Input() users: IUser[] = [];
}
