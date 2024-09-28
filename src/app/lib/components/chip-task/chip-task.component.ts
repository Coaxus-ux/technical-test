import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-chip-task',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './chip-task.component.html',
})
export class ChipTaskComponent {
    @Input() isComplete: boolean | undefined;
}
