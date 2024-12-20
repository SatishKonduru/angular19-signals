import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { userResolver } from './resolvers/user.resolver';

export const routes: Routes = [

  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   data: {name: 'Satish Konduru', age: 43},
  // },
  // {
  //   path: 'profile/:id',
  //   component: ProfileComponent,
  //   data: {name: 'Satish Konduru', age: 43},
  // },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    resolve: { user: userResolver }
  },

];
