import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskContainerComponent } from '@lib/components/task-container/task-container.component';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [CommonModule, TaskContainerComponent],
    templateUrl: './tasks.component.html',
})
export class TasksComponent {}
