import { UserService } from './../../services/user.service';
import { CommonModule } from '@angular/common';
import { Component, inject, signal, effect, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userId = signal(0)
  userService = inject(UserService)

 constructor(){
  this.userService.getUser().subscribe(res => this.userId.set(res.id))
  console.log("userID:", this.userId())
 }
}
