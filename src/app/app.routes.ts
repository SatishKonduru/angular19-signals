import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [

  {
    path: 'profile',
    component: ProfileComponent,
    data: {name: 'Satish Konduru', age: 43},
  }

];
