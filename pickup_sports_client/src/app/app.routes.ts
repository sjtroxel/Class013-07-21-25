import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./features/timeline/timeline").then((c) => c.Timeline)
    },
    {
        path: "events",
        loadComponent: () => import("./features/events/events").then((c) => c.Events)
    },
    {
        path: 'login',
        loadComponent: () => import("./features/auth/login/login").then((c) => c.Login)
    },
];
