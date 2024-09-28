import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ISkill, ITask, IUser } from '@lib/interfaces';
import { SkillService, UsersService, TaskService } from '@lib/services';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { Priority } from '@lib/enums/priority';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
    selector: 'app-add-task',
    standalone: true,
    imports: [
        CommonModule,
        RippleModule,
        DialogModule,
        ReactiveFormsModule,
        ChipsModule,
        ButtonModule,
        CalendarModule,
        DropdownModule,
        MultiSelectModule,
    ],
    templateUrl: './add-task.component.html',
})
export class AddTaskComponent {
    visible = false;
    userForm: FormGroup;
    skills: ISkill[] = [];
    priorityOptions: { label: string; value: Priority }[] = [];
    users: IUser[] = [];

    constructor(
        private _fb: FormBuilder,
        private _skillService: SkillService,
        private _userService: UsersService,
        private _taskService: TaskService,
    ) {
        this.userForm = this._fb.group({
            title: ['', Validators.required], // eslint-disable-line @typescript-eslint/unbound-method
            description: ['', Validators.required], // eslint-disable-line @typescript-eslint/unbound-method
            participants: [[]],
            date: ['', Validators.required], // eslint-disable-line @typescript-eslint/unbound-method
            priority: [Priority.Low, Validators.required], // eslint-disable-line @typescript-eslint/unbound-method
        });
        this._skillService.skills.subscribe((skills) => {
            this.skills = skills;
        });
        this.priorityOptions = Object.keys(Priority).map((key) => ({
            label: Priority[key as keyof typeof Priority],
            value: Priority[key as keyof typeof Priority],
        }));
        this._userService.getUsers().subscribe((users) => {
            this.users = users;
        });
    }

    onSubmit(): void {
        if (this.userForm.valid) {
            const task: ITask = this.userForm.value as ITask;
            this._taskService.addTask(task);
        }
    }

    showDialog(): void {
        this.visible = true;
    }
}
