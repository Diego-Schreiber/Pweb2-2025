import { Routes } from '@angular/router';
import { AboutComponent } from './about/about';
import { HelloComponent } from './hello/hello';


export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'hello', component: HelloComponent },
  { path: '', redirectTo: 'hello', pathMatch: 'full' }
];

