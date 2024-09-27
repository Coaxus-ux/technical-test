// database
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
    {
        id: 5,
        name: 'CSS',
        description: 'Lenguaje de diseño gráfico para definir la presentación de un documento HTML.',
    },
    {
        id: 6,
        name: 'Angular',
        description: 'Framework de desarrollo frontend basado en TypeScript.',
    },
];

// Mini base de datos de usuarios
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
        skills: [skills[2], skills[3]],
        avatarSeed: 54321,
    },
    {
        id: 3,
        name: 'Alice Johnson',
        age: 35,
        skills: [skills[0], skills[3]],
        avatarSeed: 67890,
    },
    {
        id: 4,
        name: 'Bob Williams',
        age: 28,
        skills: [skills[4], skills[5]],
        avatarSeed: 98765,
    },
    {
        id: 5,
        name: 'Emma Watson',
        age: 40,
        skills: [skills[1], skills[5]],
        avatarSeed: 19283,
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
    {
        id: '4',
        title: 'Refactorizar estilos CSS del sitio web',
        description: 'Reorganizar y limpiar el código CSS del proyecto para mejorar mantenibilidad.',
        completed: false,
        priority: Priority.Medium,
        participants: [users[3].name],
        date: new Date('2024-10-05'),
    },
    {
        id: '5',
        title: 'Migrar la aplicación a Angular',
        description: 'Migrar la aplicación frontend de React a Angular.',
        completed: false,
        priority: Priority.High,
        participants: [users[1].name, users[4].name],
        date: new Date('2024-10-10'),
    },
    {
        id: '6',
        title: 'Configurar CI/CD en Jenkins',
        description: 'Implementar un pipeline de integración continua y despliegue continuo usando Jenkins.',
        completed: false,
        priority: Priority.High,
        participants: [users[0].name, users[2].name, users[4].name],
        date: new Date('2024-10-15'),
    },
    {
        id: '7',
        title: 'Crear la landing page del producto',
        description: 'Desarrollar una página de aterrizaje utilizando HTML, CSS y JavaScript.',
        completed: true,
        priority: Priority.Low,
        participants: [users[3].name],
        date: new Date('2024-09-20'),
    },
    {
        id: '8',
        title: 'Optimizar la base de datos',
        description:
            'Realizar ajustes y optimizaciones en las consultas SQL para mejorar el rendimiento de la aplicación.',
        completed: false,
        priority: Priority.Medium,
        participants: [users[2].name],
        date: new Date('2024-09-29'),
    },
];

export { users, tasks, skills };
