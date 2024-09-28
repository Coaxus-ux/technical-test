import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatService, TaskService } from '@lib/services';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [CommonModule, ToastModule, MenuModule],
    templateUrl: './banner.component.html',
})
export class BannerComponent {
    formattedDate: string;
    greeting: string;
    buttonTitle = 'All';
    filters: MenuItem[] = [
        {
            items: [
                {
                    label: 'Complete',
                    icon: 'pi pi-fw pi-star-fill',
                    command: (): void => {
                        this._taskService.getCompletedTasks();
                        this.buttonTitle = 'Complete';
                    },
                },
                {
                    label: 'Pending',
                    icon: 'pi pi-fw pi-star',
                    command: (): void => {
                        this._taskService.getPendingTasks();
                        this.buttonTitle = 'Pending';
                    },
                },
                {
                    label: 'All',
                    icon: 'pi pi-fw pi-circle',
                    command: (): void => {
                        this._taskService.getAllTasks();
                        this.buttonTitle = 'All';
                    },
                },
            ],
        },
    ];

    constructor(private _dateFormatService: DateFormatService, private _taskService: TaskService) {
        this.formattedDate = this._dateFormatService.formatTodayDate(new Date());
        this.greeting = this._dateFormatService.getTimeOfDay(new Date());
    }
}
