import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-task-container',
    standalone: true,
    imports: [CommonModule, CheckboxModule, FormsModule],
    templateUrl: './task-container.component.html',
})
export class TaskContainerComponent {
    checked = false;
}
