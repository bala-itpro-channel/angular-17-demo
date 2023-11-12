import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { Routes, provideRouter } from "@angular/router";

const routes: Routes = [
  { path: 'users', loadComponent: () =>  import('./app/users/users.component').then(comp => comp.UsersComponent) }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});