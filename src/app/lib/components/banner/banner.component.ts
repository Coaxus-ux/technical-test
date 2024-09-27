import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatService } from '@lib/services/Date/DateFormatService';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './banner.component.html',
})
export class BannerComponent {
    formattedDate: string;

    constructor(private _dateFormatService: DateFormatService) {
        this.formattedDate = this._dateFormatService.formatTodayDate(new Date());
    }
}
