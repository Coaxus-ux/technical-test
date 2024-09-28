import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DateFormatService {
    formatTodayDate(date: Date): string {
        const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
        return `${new Intl.DateTimeFormat('en-US', options).format(date)}`;
    }

    getTimeOfDay(date: Date): string {
        const hours = date.getHours();

        if (hours >= 0 && hours < 6) {
            return 'Good Early Morning';
        } else if (hours >= 6 && hours < 12) {
            return 'Good Morning';
        } else if (hours === 12) {
            return 'Good Noon';
        } else if (hours > 12 && hours < 18) {
            return 'Good Afternoon';
        } else {
            return 'Good Evening';
        }
    }
}
