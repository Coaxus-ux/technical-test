// database.ts
import { Priority } from '@lib/enums/priority';
import { ITask } from '@lib/interfaces/task/ITask';
import { ISkill } from '@lib/interfaces/users/ISkill';
import { IUser } from '@lib/interfaces/users/IUser';

const skills: ISkill[] = [
    {
        id: 1,
        name: 'JavaScript',
        description: 'Lenguaje de programación utilizado principalmente en el desarrollo web.',
    },
    {
        id: 2,
        name: 'TypeScript',
        description: 'Superset de JavaScript que agrega tipado estático opcional.',
    },
    {
        id: 3,
        name: 'React',
        description: 'Librería para construir interfaces de usuario.',
    },
    {
        id: 4,
        name: 'Node.js',
        description: 'Entorno de ejecución de JavaScript en el lado del servidor.',
    },
];

const users: IUser[] = [
    {
        id: 1,
        name: 'John Doe',
        age: 30,
        skills: [skills[0], skills[1]],
        avatarSeed: 12345,
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        skills: [skills[2], skills[3]], // React, Node.js
        avatarSeed: 54321,
    },
    {
        id: 3,
        name: 'Alice Johnson',
        age: 35,
        skills: [skills[0], skills[3]],
        avatarSeed: 67890,
    },
];

const tasks: ITask[] = [
    {
        id: '1',
        title: 'Desarrollar API REST',
        description: 'Crear una API REST usando Node.js y Express',
        completed: false,
        priority: Priority.High,
        participants: [users[0].name, users[2].name],
        date: new Date('2024-10-01'),
    },
    {
        id: '2',
        title: 'Diseñar componente en React',
        description: 'Desarrollar un componente reutilizable en React para la interfaz.',
        completed: true,
        priority: Priority.Medium,
        participants: [users[1].name],
        date: new Date('2024-09-15'),
    },
    {
        id: '3',
        title: 'Implementar validación con TypeScript',
        description: 'Agregar tipado y validaciones estrictas en el proyecto usando TypeScript.',
        completed: false,
        priority: Priority.Low,
        participants: [users[0].name, users[1].name],
        date: new Date('2024-09-30'),
    },
];

export { users, tasks, skills };
