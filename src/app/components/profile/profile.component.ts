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
  // @Input() name: any
  // @Input() age: any
  // name : any
  // age: any
  // private _activatedRoute = inject(ActivatedRoute)
  // constructor(){
  //  this._activatedRoute.data.subscribe(data => {
  //     this.name = data['name']
  //     this.age = data['age']
  //   })
  // }
  // Define signals for name and age
  // @Input({ transform: (value : string) => signal(value) }) name!: Signal<string>;
  // @Input({ transform: (value : number) => signal(value) }) age!: Signal<number>;
  private route = inject(ActivatedRoute);
 // Convert route.data observable to signal

  // // Define signals for name and age
  // name: Signal<string> = signal(this.route.snapshot.data['name']);
  // age: Signal<number> = signal(this.route.snapshot.data['age']);

 // Convert route.data observable to signal
 routeData = toSignal(this.route.data);
  // Define computed signals for name and age
  name: Signal<string> = computed(() => this.routeData()?.name ?? '');
  age: Signal<number> = computed(() => this.routeData()?.age ?? 0);


}
