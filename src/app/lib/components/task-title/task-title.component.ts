import { Component, Input } from '@angular/core';
import { ITask } from '@lib/interfaces';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ChipTaskComponent } from '@lib/components/chip-task/chip-task.component';

@Component({
    selector: 'app-task-title',
    templateUrl: './task-title.component.html',
    imports: [CheckboxModule, FormsModule, ChipTaskComponent],
    standalone: true,
})
export class TaskTitleComponent {
    @Input() task: ITask | undefined;
    @Input() checked = false;
}
