import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  private _activatedRoute = inject(ActivatedRoute)
  userService = inject(UserService)
  queryParams = toSignal(this._activatedRoute.queryParamMap)
  id = computed(() => this.queryParams()?.get('id')?? null)
  userName = signal('')

  constructor(){
    effect(() => {
      // let name = ''
      this.userService.userName(this.id()).subscribe(res => this.userName.set(res.name))
      // this.userName.set(name)
    })

  }

}
