import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'app-add-task',
    standalone: true,
    imports: [CommonModule, RippleModule, DialogModule],
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
    visible = false;

    showDialog(): void {
        this.visible = true;
    }
}
