import { computed, effect, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// export interface User {
//   id: number;
//   name: string;
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// // Private BehaviorSubject to hold user state
// private readonly _user = new BehaviorSubject<User | null>(null);
// // Observable for external access to the user state
// readonly user$: Observable<User | null> = this._user.asObservable();
//   constructor() { }


//   // Get the current user value
//   getCurrentUser(): User | null {
//     return this._user.getValue();
//   }

//    // Check if the user is logged in
//    isLoggedIn(): boolean {
//     return this._user.getValue() !== null;
//   }

//    // Log in the user
//    login(user: User) {
//     this._user.next(user);
//   }

//   // Log out the user
//   logout() {
//     this._user.next(null);
//   }
// ----->End of using BehaviorSubject
// ----->Using Signals
 // State signal to hold the user object
 private readonly _user = signal<{ id: number; name: string } | null>(null);

 // Public signal to access the user state
 readonly user = this._user.asReadonly();

 // Computed signal to check if a user is logged in
 readonly isLoggedIn = computed(() => this._user() !== null);

 constructor() {
   // Effect to log changes in user state
   effect(() => {
     console.log('User state changed:', this._user());
   });
 }

 // Method to log in the user
 login(user: { id: number; name: string }) {
   this._user.set(user);
 }

 // Method to log out the user
 logout() {
   this._user.set(null);
 }

}
