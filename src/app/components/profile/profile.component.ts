import { Component, computed, inject, Input, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  private _activatedRoute = inject(ActivatedRoute);

 routeData = toSignal(this._activatedRoute.data);

  name: Signal<string> = computed(() => this.routeData()?.name ?? '');
  age: Signal<number> = computed(() => this.routeData()?.age ?? 0);
  id: Signal<string | null> = toSignal(this._activatedRoute.paramMap.pipe(map((params) => params.get('id'))));


 userDetails: Signal<string> = computed(() => {
  const userId = this.id();
  return userId ? `User Details for ID: ${userId}` : 'No User ID Found';
});
}
