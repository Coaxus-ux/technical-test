import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { ITask } from '@lib/interfaces';
import { Priority } from '@lib/enums/priority';

describe('TaskService', () => {
    let service: TaskService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TaskService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return all tasks', (done: DoneFn) => {
        service.getTasks().subscribe((tasks: ITask[]) => {
            expect(tasks.length).toBe(3);
            done();
        });
    });

    it('should return a task by id', (done: DoneFn) => {
        service.getTaskById('1').subscribe((task: ITask | undefined) => {
            expect(task).toBeTruthy();
            expect(task?.title).toBe('Task 1');
            done();
        });
    });

    it('should return undefined for a non-existing task id', (done: DoneFn) => {
        service.getTaskById('999').subscribe((task: ITask | undefined) => {
            expect(task).toBeUndefined();
            done();
        });
    });

    it('should return completed tasks', (done: DoneFn) => {
        service.completeTask('1').subscribe(() => {
            service.getCompletedTasks().subscribe((tasks: ITask[]) => {
                expect(tasks.length).toBe(1);
                expect(tasks[0].id).toBe('1');
                done();
            });
        });
    });

    it('should return pending tasks', (done: DoneFn) => {
        service.getPendingTasks().subscribe((tasks: ITask[]) => {
            expect(tasks.length).toBe(3);
            done();
        });
    });

    it('should return tasks by priority', (done: DoneFn) => {
        service.getTasksByPriority(Priority.High).subscribe((tasks: ITask[]) => {
            expect(tasks.length).toBe(1);
            expect(tasks[0].priority).toBe(Priority.High);
            done();
        });
    });

    it('should add a new task', (done: DoneFn) => {
        const newTask: ITask = {
            id: '4',
            title: 'Task 4',
            description: 'Description 4',
            date: new Date(),
            completed: false,
            priority: Priority.Low,
            participants: ['User 7'],
        };

        service.addTask(newTask).subscribe((tasks: ITask[]) => {
            expect(tasks.length).toBe(4);
            expect(tasks.find((t) => t.id === '4')?.title).toBe('Task 4');
            done();
        });
    });

    it('should update an existing task', (done: DoneFn) => {
        const updatedTask: ITask = {
            id: '1',
            title: 'Updated Task 1',
            description: 'Updated Description 1',
            date: new Date(),
            completed: false,
            priority: Priority.Medium,
            participants: ['User 1', 'User 2'],
        };

        service.updateTask(updatedTask).subscribe((tasks: ITask[]) => {
            const task = tasks.find((t) => t.id === '1');
            expect(task?.title).toBe('Updated Task 1');
            expect(task?.description).toBe('Updated Description 1');
            done();
        });
    });

    it('should delete a task by id', (done: DoneFn) => {
        service.deleteTask('1').subscribe((tasks: ITask[]) => {
            expect(tasks.length).toBe(2);
            expect(tasks.find((t) => t.id === '1')).toBeUndefined();
            done();
        });
    });

    it('should mark a task as complete', (done: DoneFn) => {
        service.completeTask('2').subscribe((tasks: ITask[]) => {
            const task = tasks.find((t) => t.id === '2');
            expect(task?.completed).toBeTrue();
            done();
        });
    });

    it('should mark a task as uncompleted', (done: DoneFn) => {
        service.completeTask('2').subscribe(() => {
            service.unCompleteTask('2').subscribe((tasks: ITask[]) => {
                const task = tasks.find((t) => t.id === '2');
                expect(task?.completed).toBeFalse();
                done();
            });
        });
    });
});
