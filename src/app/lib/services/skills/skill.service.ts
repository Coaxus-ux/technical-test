import { Injectable } from '@angular/core';
import { ISkill } from '@lib/interfaces';
import { skills } from '@lib/utils/initdb';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SkillService {
    private _skills: ISkill[] = skills;
    private _skillsSubject: BehaviorSubject<ISkill[]> = new BehaviorSubject(this._skills);

    constructor() {
        console.log('SkillService created');
    }

    get skills(): Observable<ISkill[]> {
        return this._skillsSubject.asObservable();
    }
}
