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
    }
];
