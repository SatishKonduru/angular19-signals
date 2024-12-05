import { CommonModule } from '@angular/common';
import {ChangeDetectorRef, Component, DestroyRef, inject, Injector, OnDestroy, OnInit, runInInjectionContext } from '@angular/core';
import { interval, Observable, Subscription, tap } from 'rxjs';
import { counter } from '../../utilityFn';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit, OnDestroy{

  // values : Subscription
  values$ : Observable<any>
   private _destroyRef = inject(DestroyRef)
   private _injector = inject(Injector)
  constructor(){
  //  counter()
  }
  ngOnInit(): void {

    // const dr = inject(DestroyRef)
    // this.values$ = interval(1000).pipe(
    //   tap(value => console.log('Emitted value:', value))
    // );
  // this.values = interval(1000).subscribe(console.log)
  // this._destroyRef.onDestroy(() => this.values.unsubscribe())
  // counter(this._destroyRef)
  runInInjectionContext(this._injector, () => counter())
}

ngOnDestroy(): void {
  // this.values.unsubscribe()


}
}
