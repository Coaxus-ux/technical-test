import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '@lib/interfaces';
import { AvatarColors } from '@lib/enums/AvatarColors';

@Component({
    selector: 'app-members',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './members.component.html',
})
export class MembersComponent {
    @Input() members: IUser[] = [];

    getColor(index: number): AvatarColors {
        const colors = Object.values(AvatarColors);
        return colors[index % colors.length] as AvatarColors;
    }
}
