import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { TaskService, DateFormatService } from '@lib/services';

@Component({
    selector: 'app-task-actions',
    templateUrl: './task-actions.component.html',
    standalone: true,
    imports: [ToastModule, MenuModule, ButtonModule],
})
export class TaskActionsComponent implements OnInit {
    items: MenuItem[] | undefined;
    @Input() taskId!: string;
    @Input() taskDate!: Date;

    constructor(private _taskService: TaskService, private _dateFormatService: DateFormatService) {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'Update',
                        icon: 'pi pi-refresh',
                        command: (): void => {
                            console.log('Update');
                        },
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        command: (): void => {
                            this._taskService.deleteTask(this.taskId);
                        },
                    },
                ],
            },
        ];
    }
    formatDate(date: Date): string {
        return this._dateFormatService.formatTodayDate(date);
    }
}
