import { Routes } from '@angular/router';
// import { authGuard } from '@lib/guards';
export const routes: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('@pages/tasks/tasks.component')).TasksComponent,
    },
    {
        path: 'users',
        loadComponent: async () => (await import('@pages/users/users.component')).UsersComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
