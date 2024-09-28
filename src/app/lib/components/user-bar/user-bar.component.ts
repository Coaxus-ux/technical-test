import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { AddUserComponent } from '@lib/components/add-user/add-user.component';

@Component({
    selector: 'app-user-bar',
    standalone: true,
    imports: [CommonModule, RippleModule, AddUserComponent],
    templateUrl: './user-bar.component.html',
})
export class UserBarComponent {
    @Input() users = 0;
    isVisible = false;

    openTask(): void {
        this.isVisible = true;
    }

    onDialogHide(): void {
        this.isVisible = false;
    }
}
