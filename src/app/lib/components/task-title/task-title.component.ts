import { Component, Input } from '@angular/core';
import { ITask } from '@lib/interfaces';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-task-title',
    templateUrl: './task-title.component.html',
    imports: [CheckboxModule, FormsModule],
    standalone: true,
})
export class TaskTitleComponent {
    @Input() task: ITask | undefined;
    @Input() checked = false;
}
