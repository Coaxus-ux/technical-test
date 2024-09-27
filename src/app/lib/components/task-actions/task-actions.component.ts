import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-task-actions',
    templateUrl: './task-actions.component.html',
    standalone: true,
    providers: [MessageService],
    imports: [ToastModule, MenuModule, ButtonModule],
})
export class TaskActionsComponent implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private _messageService: MessageService) {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'Update',
                        icon: 'pi pi-refresh',
                        command: (): void => {
                            this.update();
                        },
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        command: (): void => {
                            this.delete();
                        },
                    },
                ],
            },
        ];
    }

    update(): void {
        this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
        console.log('Update');
    }

    delete(): void {
        console.log('Delete');
    }
}
