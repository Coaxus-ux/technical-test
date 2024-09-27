import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DateFormatService {
    formatTodayDate(date: Date): string {
        const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
        return `Today, ${new Intl.DateTimeFormat('en-US', options).format(date)}`;
    }
}
