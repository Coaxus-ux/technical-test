import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'app-add-user',
    standalone: true,
    imports: [CommonModule, DialogModule],
    templateUrl: './add-user.component.html',
})
export class AddUserComponent {
    @Input() visible = false;
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    @Output() onHide = new EventEmitter<void>();

    handleHide(): void {
        this.onHide.emit();
    }
}
