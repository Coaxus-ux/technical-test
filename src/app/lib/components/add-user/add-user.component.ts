import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import {
    ReactiveFormsModule,
    FormBuilder,
    FormGroup,
    Validators,
    ValidationErrors,
    AbstractControl,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { IUser } from '@lib/interfaces';
import { UsersService, SkillService } from '@lib/services';

@Component({
    selector: 'app-add-user',
    standalone: true,
    imports: [CommonModule, DialogModule, ReactiveFormsModule, ButtonModule, ChipsModule],
    templateUrl: './add-user.component.html',
})
export class AddUserComponent implements OnInit {
    @Input() visible = false;
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    @Output() onHide = new EventEmitter<void>();

    userForm!: FormGroup;

    constructor(private _fb: FormBuilder, private _userService: UsersService, private _skillService: SkillService) {}

    ngOnInit(): void {
        this.userForm = this._fb.group({
            // eslint-disable-next-line @typescript-eslint/unbound-method
            name: ['', Validators.required],
            // eslint-disable-next-line @typescript-eslint/unbound-method
            age: ['', [Validators.required, Validators.pattern('^[0-9]+$'), this.ageValidator]],
            skills: [[]],
        });
    }

    handleHide(): void {
        this.onHide.emit();
    }

    onSubmit(): void {
        if (this.userForm?.valid) {
            console.log('Formulario enviado:', this.userForm.value);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const user: IUser = this.userForm.value;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
            user.skills = this._skillService.createSkills(this.userForm.value.skills);
            this._userService.addUser(user);
            this.handleHide();
        }
    }

    ageValidator(control: AbstractControl): ValidationErrors | null {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const age = parseInt(control.value, 10);
        return age >= 18 && age <= 100 ? null : { ageInvalid: true };
    }
}
