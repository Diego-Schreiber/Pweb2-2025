import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelloComponent } from './hello/hello.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'hello', component: HelloComponent },
  { path: '', redirectTo: 'hello', pathMatch: 'full' }
];

