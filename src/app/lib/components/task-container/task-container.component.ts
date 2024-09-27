import { Component, Input } from '@angular/core';
import { ITask } from '@lib/interfaces';
import { TaskTitleComponent } from '@lib/components/task-title/task-title.component';
import { TaskActionsComponent } from '@lib/components/task-actions/task-actions.component';

@Component({
    selector: 'app-task-container',
    templateUrl: './task-container.component.html',
    standalone: true,
    imports: [TaskTitleComponent, TaskActionsComponent],
})
export class TaskContainerComponent {
    @Input() task: ITask | undefined;
    @Input() checked = false;
}
