import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { userResolver } from './resolvers/user.resolver';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


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
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'check',
    redirectTo: (routeSnapShot) => {
      console.log(routeSnapShot)
      let userId = parseInt(routeSnapShot.queryParams['id'])
      if(userId != 0 || null){
        return 'user?id='+ userId
      }
      else{
        return 'error'
      }
    }
  },
  {
    path: 'error',
    component: PageNotFoundComponent
  }

];
