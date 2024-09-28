import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { TaskService, DateFormatService } from '@lib/services';
import { TaskComponent } from '@lib/components/task/task.component';
import { ITask } from '@lib/interfaces';

@Component({
    selector: 'app-task-actions',
    templateUrl: './task-actions.component.html',
    standalone: true,
    imports: [ToastModule, MenuModule, ButtonModule, TaskComponent],
})
export class TaskActionsComponent implements OnInit {
    items: MenuItem[] | undefined;
    @Input() task!: ITask;
    isVisible = false;

    constructor(private _taskService: TaskService, private _dateFormatService: DateFormatService) {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        command: (): void => {
                            this._taskService.deleteTask(this.task.id);
                        },
                    },
                ],
            },
        ];
    }

    formatDate(date: Date): string {
        return this._dateFormatService.formatTodayDate(date);
    }

    openTask(): void {
        this.isVisible = true;
    }

    onDialogHide(): void {
        this.isVisible = false;
    }
}
