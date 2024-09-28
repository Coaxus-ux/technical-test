import { Injectable } from '@angular/core';
import { ITask } from '@lib/interfaces';
import { Priority } from '@lib/enums/priority';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tasks } from '@lib/utils/initdb';
@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private _tasks: ITask[] = tasks;
    private _tasksSubject: BehaviorSubject<ITask[]> = new BehaviorSubject(this._tasks);

    getTasks(): Observable<ITask[]> {
        return this._tasksSubject.asObservable();
    }

    getAllTasks(): void {
        this._tasksSubject.next(this._tasks);
    }

    getCompletedTasks(): void {
        const completedTasks = this._tasks.filter((task) => task.completed);
        this._tasksSubject.next(completedTasks);
    }

    getPendingTasks(): void {
        const pendingTasks = this._tasks.filter((task) => !task.completed);
        this._tasksSubject.next(pendingTasks);
    }

    deleteTask(id: string): void {
        const index = this._tasks.findIndex((t) => t.id === id);
        if (index !== -1) {
            this._tasks.splice(index, 1);
        }
        this._tasksSubject.next(this._tasks);
    }

    getTasksByPriority(priority: Priority): Observable<ITask[]> {
        const tasksByPriority = this._tasks.filter((task) => task.priority === priority);
        return of(tasksByPriority);
    }

    addTask(task: ITask): Observable<ITask[]> {
        this._tasks.push(task);
        return of(this._tasks);
    }

    updateTask(task: ITask): Observable<ITask[]> {
        const index = this._tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) {
            this._tasks[index] = task;
        }
        return of(this._tasks);
    }

    completeTask(id: string): Observable<ITask[]> {
        const task = this._tasks.find((t) => t.id === id);
        if (task) {
            task.completed = true;
        }
        return of(this._tasks);
    }

    unCompleteTask(id: string): Observable<ITask[]> {
        const task = this._tasks.find((t) => t.id === id);
        if (task) {
            task.completed = false;
        }
        return of(this._tasks);
    }

    countOpenTasks(): Observable<number> {
        const openTasks = this._tasks.filter((task) => !task.completed);
        return of(openTasks.length);
    }
}
