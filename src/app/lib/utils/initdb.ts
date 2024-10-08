// database
import { Priority } from '@lib/enums/priority';
import { ITask, ISkill, IUser } from '@lib/interfaces';

const skills: ISkill[] = [
    {
        id: 1,
        name: 'JavaScript',
    },
    {
        id: 2,
        name: 'TypeScript',
    },
    {
        id: 3,
        name: 'React',
    },
    {
        id: 4,
        name: 'Node.js',
    },
    {
        id: 5,
        name: 'CSS',
    },
    {
        id: 6,
        name: 'Angular',
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
        participants: [users[0], users[2]],
        date: new Date('2024-10-01'),
    },
    {
        id: '2',
        title: 'Diseñar componente en React',
        description: 'Desarrollar un componente reutilizable en React para la interfaz.',
        completed: true,
        priority: Priority.Medium,
        participants: [users[1]],
        date: new Date('2024-09-15'),
    },
    {
        id: '3',
        title: 'Implementar validación con TypeScript',
        description: 'Agregar tipado y validaciones estrictas en el proyecto usando TypeScript.',
        completed: false,
        priority: Priority.Low,
        participants: [users[0], users[1]],
        date: new Date('2024-09-30'),
    },
    {
        id: '4',
        title: 'Refactorizar estilos CSS del sitio web',
        description: 'Reorganizar y limpiar el código CSS del proyecto para mejorar mantenibilidad.',
        completed: false,
        priority: Priority.Medium,
        participants: [users[3]],
        date: new Date('2024-10-05'),
    },
    {
        id: '5',
        title: 'Migrar la aplicación a Angular',
        description: 'Migrar la aplicación frontend de React a Angular.',
        completed: false,
        priority: Priority.High,
        participants: [users[1], users[4]],
        date: new Date('2024-10-10'),
    },
    {
        id: '6',
        title: 'Configurar CI/CD en Jenkins',
        description: 'Implementar un pipeline de integración continua y despliegue continuo usando Jenkins.',
        completed: false,
        priority: Priority.High,
        participants: [users[0], users[2], users[4], users[1]],
        date: new Date('2024-10-15'),
    },
    {
        id: '7',
        title: 'Crear la landing page del producto',
        description: 'Desarrollar una página de aterrizaje utilizando HTML, CSS y JavaScript.',
        completed: true,
        priority: Priority.Low,
        participants: [users[3]],
        date: new Date('2024-09-20'),
    },
    {
        id: '8',
        title: 'Optimizar la base de datos',
        description:
            'Realizar ajustes y optimizaciones en las consultas SQL para mejorar el rendimiento de la aplicación.',
        completed: false,
        priority: Priority.Medium,
        participants: [users[2]],
        date: new Date('2024-09-29'),
    },
    {
        id: '9',
        title: 'Auditar seguridad en el backend',
        description: 'Revisar e implementar mejoras de seguridad en la API y la base de datos.',
        completed: false,
        priority: Priority.High,
        participants: [users[1], users[3]],
        date: new Date('2024-10-20'),
    },
    {
        id: '10',
        title: 'Actualizar documentación técnica',
        description: 'Mejorar y actualizar la documentación técnica del proyecto para reflejar los cambios recientes.',
        completed: true,
        priority: Priority.Low,
        participants: [users[0]],
        date: new Date('2024-09-25'),
    },
    {
        id: '11',
        title: 'Integrar autenticación OAuth',
        description: 'Implementar un sistema de autenticación con OAuth para mejorar la seguridad de inicio de sesión.',
        completed: false,
        priority: Priority.Medium,
        participants: [users[1], users[4]],
        date: new Date('2024-10-22'),
    },
    {
        id: '12',
        title: 'Configurar servidor Nginx',
        description: 'Configurar y optimizar el servidor Nginx para balanceo de carga y seguridad.',
        completed: false,
        priority: Priority.High,
        participants: [users[2]],
        date: new Date('2024-10-25'),
    },
    {
        id: '13',
        title: 'Escribir pruebas unitarias',
        description: 'Desarrollar y ejecutar pruebas unitarias para el backend con Jest.',
        completed: true,
        priority: Priority.Medium,
        participants: [users[0], users[3]],
        date: new Date('2024-09-28'),
    },
    {
        id: '14',
        title: 'Optimizar imágenes del sitio web',
        description: 'Reducir el tamaño de las imágenes para mejorar el tiempo de carga del sitio web.',
        completed: false,
        priority: Priority.Low,
        participants: [users[1]],
        date: new Date('2024-10-05'),
    },
    {
        id: '15',
        title: 'Actualizar dependencias del proyecto',
        description: 'Actualizar todas las dependencias del proyecto a sus últimas versiones.',
        completed: true,
        priority: Priority.Medium,
        participants: [users[0]],
        date: new Date('2024-09-30'),
    },
];

export { users, tasks, skills };
