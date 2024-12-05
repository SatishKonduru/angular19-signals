import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, combineLatest, debounceTime, interval, map, withLatestFrom } from 'rxjs';
import { rskSignal } from './rskSignal';

import { LinkedSignalComponent } from "./components/linked-signal/linked-signal.component";
import { CounterComponent } from "./components/counter/counter.component";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, MatButtonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular19-signals';
  // colors$ = new BehaviorSubject<any>({r: 'Red', g: 'Green', b: 'Blue'})
  // colorKey$ = new BehaviorSubject('r')
  // // slectectedValue$ = combineLatest([this.colors$, this.colorKey$])
  // //                   .pipe(
  // //                     debounceTime(1000),
  // //                     map(([color, key]) => color[key]),
  // //                   )
  // selectedValue$ = this.colorKey$.pipe(withLatestFrom(this.colors$), map(([key, colors]) => colors[key]));
  // constructor(){
  //  this.selectedValue$.subscribe(console.log)
  // }

  // // ColorObj = {r: 'Red', g: 'Green', b: 'Blue'}
  // // key = 'r'

  // newColors() {
  //   this.colors$.next({y: 'Yelow', o: 'Orange', p: 'Purple'})
  //   this.colorKey$.next('o')
  // }
  // readonly firstSignal = signal(100)
  // readonly secondSignal = signal('Satish')
  // readonly firstSignal = rskSignal('Satish')
  // constructor(){
  //   effect(() => {
  //     console.log("firstSignal Value: ", this.firstSignal())
  //     console.log("Derived Signal: ", this.derived());
  //     console.log("sescondSignal Value: ", this.secondSignal())
  //     this.firstSignal.set(111)
  //     this.secondSignal.set('Konduru')
  //   })

  // }
  // setSignal(){
  //   this.firstSignal.set(1)
  // }
  // updateSignal(){
  //   this.firstSignal.update(value => value+1)
  // }

  // readonly derived = computed(() => this.firstSignal() * 2)
  showCounter = false;

  toggleCounter(){
    this.showCounter = !this.showCounter
   }
}
