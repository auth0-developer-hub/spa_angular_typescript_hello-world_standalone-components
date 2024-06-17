import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {path: '', pathMatch: 'full', loadComponent: () => import('./features/home/home.component').then(mod => mod.HomeComponent)},
  {path: 'profile', loadComponent: () => import('./features/profile/profile.component').then(mod => mod.ProfileComponent)},
  {path: 'public', loadComponent: () => import('./features/public/public.component').then(mod => mod.PublicComponent)},
  {path: 'protected', loadComponent: () => import('./features/protected/protected.component').then(mod => mod.ProtectedComponent)},
  {path: 'admin', loadComponent: () => import('./features/admin/admin.component').then(mod => mod.AdminComponent)},
  {path: '**', loadComponent: () => import('./features/not-found/not-found.component').then(mod => mod.NotFoundComponent)},
];
