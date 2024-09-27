import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Priority } from '@lib/enums/priority';
import { ITask } from '@lib/interfaces';

describe('TaskService', () => {
    let service: TaskService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TaskService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return all tasks', () => {
        const tasks = service.getTasks();
        expect(tasks.length).toBe(3);
    });

    it('should return a task by id', () => {
        const task = service.getTaskById('1');
        expect(task).toBeTruthy();
        expect(task?.title).toBe('Task 1');
    });

    it('should return undefined for non-existing task id', () => {
        const task = service.getTaskById('999');
        expect(task).toBeUndefined();
    });

    it('should add a new task', () => {
        const newTask: ITask = {
            id: '4',
            title: 'Task 4',
            description: 'Description 4',
            date: new Date(),
            completed: false,
            priority: Priority.Low,
            participants: ['User 7'],
        };

        service.addTask(newTask);
        const tasks = service.getTasks();
        expect(tasks.length).toBe(4);
        expect(tasks.find((t) => t.id === '4')?.title).toBe('Task 4');
    });

    it('should update an existing task', () => {
        const updatedTask: ITask = {
            id: '1',
            title: 'Updated Task 1',
            description: 'Updated Description 1',
            date: new Date(),
            completed: false,
            priority: Priority.Medium,
            participants: ['User 1', 'User 2'],
        };

        service.updateTask(updatedTask);
        const task = service.getTaskById('1');
        expect(task?.title).toBe('Updated Task 1');
        expect(task?.description).toBe('Updated Description 1');
    });

    it('should delete a task by id', () => {
        service.deleteTask('1');
        const tasks = service.getTasks();
        expect(tasks.length).toBe(2);
        expect(service.getTaskById('1')).toBeUndefined();
    });

    it('should return completed tasks', () => {
        service.completeTask('1');
        const completedTasks = service.getCompletedTasks();
        expect(completedTasks.length).toBe(1);
        expect(completedTasks[0].id).toBe('1');
    });

    it('should return pending tasks', () => {
        service.completeTask('1');
        const pendingTasks = service.getPendingTasks();
        expect(pendingTasks.length).toBe(2);
    });

    it('should return tasks by priority', () => {
        const highPriorityTasks = service.getTasksByPriority(Priority.High);
        expect(highPriorityTasks.length).toBe(1);
        expect(highPriorityTasks[0].priority).toBe(Priority.High);
    });

    it('should mark a task as complete', () => {
        service.completeTask('2');
        const task = service.getTaskById('2');
        expect(task?.completed).toBeTrue();
    });

    it('should mark a task as uncompleted', () => {
        service.completeTask('2');
        service.unCompleteTask('2');
        const task = service.getTaskById('2');
        expect(task?.completed).toBeFalse();
    });
});
