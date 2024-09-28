import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatService } from '@lib/services';
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
                        this.buttonTitle = 'Complete';
                    },
                },
                {
                    label: 'Pending',
                    icon: 'pi pi-fw pi-star',
                    command: (): void => {
                        this.buttonTitle = 'Pending';
                    },
                },
                {
                    label: 'All',
                    icon: 'pi pi-fw pi-circle',
                    command: (): void => {
                        this.buttonTitle = 'All';
                    },
                },
            ],
        },
    ];

    constructor(private _dateFormatService: DateFormatService) {
        this.formattedDate = this._dateFormatService.formatTodayDate(new Date());
        this.greeting = this._dateFormatService.getTimeOfDay(new Date());
    }
}
