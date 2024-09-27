import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskContainerComponent } from '@lib/components/task-container/task-container.component';
import { TaskService } from '@lib/services/tasks/task.service';
import { Observable } from 'rxjs';
import { ITask } from '@lib/interfaces';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [CommonModule, TaskContainerComponent],
    templateUrl: './tasks.component.html',
})
export class TasksComponent {
    tasks$: Observable<ITask[]>;

    constructor(private _taskService: TaskService) {
        this.tasks$ = this._taskService.getTasks();
    }
}
