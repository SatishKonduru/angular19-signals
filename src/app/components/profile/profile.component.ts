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
  // id: Signal<string | null> = toSignal(this._activatedRoute.paramMap.pipe(map((params) => params.get('id'))));


 userDetails: Signal<string> = computed(() => {
  const userId = this.id();
  return userId ? `User Details for ID: ${userId}` : 'No User ID Found';
});

queryParams = toSignal(this._activatedRoute.queryParamMap);
// Extract individual query params as computed signals
id = computed(() => this.queryParams()?.get('id') ?? null);
tab = computed(() => this.queryParams()?.get('tab') ?? null);
// Compute a message based on the query params
message: Signal<string> = computed(() => {
  const id = this.id();
  const tab = this.tab();
  return id && tab
    ? `Viewing Tab: ${tab} for User ID: ${id}`
    : 'No ID or Tab specified in query params';
});
}
