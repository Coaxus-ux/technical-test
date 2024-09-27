import { Injectable } from '@angular/core';
import { ITask } from '@lib/interfaces';
import { Priority } from '@lib/enums/priority';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    tasks: ITask[] = [
        {
            id: '1',
            title: 'Task 1',
            description: 'Description 1',
            date: new Date(),
            completed: false,
            priority: Priority.Low,
            participants: ['User 1', 'User 2'],
        },
        {
            id: '2',
            title: 'Task 2',
            description: 'Description 2',
            date: new Date(),
            completed: false,
            priority: Priority.Medium,
            participants: ['User 3', 'User 4'],
        },
        {
            id: '3',
            title: 'Task 3',
            description: 'Description 3',
            date: new Date(),
            completed: false,
            priority: Priority.High,
            participants: ['User 5', 'User 6'],
        },
    ];

    getTasks(): ITask[] {
        return this.tasks;
    }

    getTaskById(id: string): ITask | undefined {
        return this.tasks.find((task) => task.id === id);
    }

    getCompletedTasks(): ITask[] {
        return this.tasks.filter((task) => task.completed);
    }

    getPendingTasks(): ITask[] {
        return this.tasks.filter((task) => !task.completed);
    }

    getTasksByPriority(priority: Priority): ITask[] {
        return this.tasks.filter((task) => task.priority === priority);
    }

    addTask(task: ITask): void {
        this.tasks.push(task);
    }

    updateTask(task: ITask): void {
        const index = this.tasks.findIndex((t) => t.id === task.id);
        this.tasks[index] = task;
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    completeTask(id: string): void {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.completed = true;
        }
    }

    unCompleteTask(id: string): void {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.completed = false;
        }
    }
}
