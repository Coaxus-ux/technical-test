import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ITask } from '@lib/interfaces';
import { DateFormatService } from '@lib/services';
import { MembersComponent } from '@lib/components/members/members.component';
import { ChipModule } from 'primeng/chip';

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [CommonModule, DialogModule, MembersComponent, ChipModule],
    templateUrl: './task.component.html',
})
export class TaskComponent {
    @Input() visible = false;
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    @Output() onHide = new EventEmitter<void>();

    @Input() task!: ITask;

    handleHide(): void {
        this.onHide.emit();
    }

    formatDate(date: Date): string {
        return new DateFormatService().formatTodayDate(date);
    }
}
