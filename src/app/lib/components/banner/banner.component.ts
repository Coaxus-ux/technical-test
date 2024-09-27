import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatService } from '@lib/services/date/date-format.service';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './banner.component.html',
})
export class BannerComponent {
    formattedDate: string;
    greeting = '';
    constructor(private _dateFormatService: DateFormatService) {
        this.formattedDate = this._dateFormatService.formatTodayDate(new Date());
        this.greeting = this._dateFormatService.getTimeOfDay(new Date());
    }
}
