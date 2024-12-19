import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, ContentChild, effect, inject, QueryList, Signal, signal, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, combineLatest, debounceTime, interval, map, withLatestFrom } from 'rxjs';
import { rskSignal } from './rskSignal';

import { LinkedSignalComponent } from "./components/linked-signal/linked-signal.component";
import { CounterComponent } from "./components/counter/counter.component";
import {MatButtonModule} from '@angular/material/button';
import { CounterWithSignalsComponent } from "./components/counter-with-signals/counter-with-signals.component";
import { ReactiveContextWithEffectComponent } from "./components/reactive-context-with-effect/reactive-context-with-effect.component";
import { RxjsToSignalsComponent } from "./components/rxjs-to-signals/rxjs-to-signals.component";
import { SignalToRxjsComponent } from "./components/signal-to-rxjs/signal-to-rxjs.component";
import { SignalImmutablityComponent } from "./components/signal-immutablity/signal-immutablity.component";
import { InputComponent } from "./components/input/input.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { OutputComponent } from "./components/output/output.component";
import { TraditionalVcComponent } from "./components/traditional-vc/traditional-vc.component";
import { SignalsVcComponent } from "./components/signals-vc/signals-vc.component";
import { TraditionalVcChildComponent } from "./components/traditional-vc-child/traditional-vc-child.component";
import { SignalsVcChildComponent } from "./components/signals-vc-child/signals-vc-child.component";
import { CardComponent } from "./components/card/card.component";
import { SignalHostComponent } from "./components/signal-host/signal-host.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, SignalHostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular19-signals';
  changeDetector = inject(ChangeDetectorRef)
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
  // showCounter = false;

  // toggleCounter(){
  //   this.showCounter = !this.showCounter
  //  }

  // firstValue: number;
  // secondValue: number;
  // msg: any

  // @ViewChild(TraditionalVcChildComponent) child!: TraditionalVcChildComponent;
  // @ViewChildren(TraditionalVcChildComponent) children!: QueryList<TraditionalVcChildComponent>;
  // // ngOnInit(){
  // //   console.log('Child from parent under OnInit:', this.child.childProperty);
  // // }

  // ngAfterViewInit() {
  //   console.log('Child from parent under AfterViewInit:', this.child.childProperty);
  //   this.children.forEach(c=> console.log("Children from parent under AfterViewInit:", c.childProperty))
  // }

  // logChild() {
  //   console.log("Child from Parent on Click event: ", this.child.childProperty);
  // }

  // logChildren(){
  //   console.log(this.children.toArray());
  // }
  // @ViewChild(SignalsVcChildComponent, { read: signal, static: true }) childSignal!: Signal<SignalsVcChildComponent | null>;
  // @ViewChild(SignalsVcChildComponent) childComponent!: SignalsVcChildComponent;
  // childSignal = signal<any>(null)
  // dummy = effect(() => {
  //   console.log(this.childSignal.set(this.childComponent.childProperty))
  // })
  // logChild(){
  //   console.log(this.childSignal.set(this.childComponent.childProperty))
  // }

// usecase - 1
// @ViewChild(SignalsVcChildComponent) childComponent!: SignalsVcChildComponent;

//   // Signal to store the child property value
//   childSignal = signal<string | null>(null);

//   // Effect to react to changes in the signal
//   dummy = effect(() => {
//     const signalValue = this.childSignal();
//     console.log('Effect Triggered:', signalValue);
//   });

//   // Lifecycle hook to ensure childComponent is initialized
//   ngAfterViewInit() {
//     if (this.childComponent) {
//       // Update the signal initially
//       this.childSignal.set(this.childComponent.childProperty);
//       console.log('In AfterViewInit:', this.childSignal());
//     } else {
//       console.error('Child component is not initialized in AfterViewInit');
//     }
//   }

//   logChild() {
//     if (this.childComponent) {
//       this.childSignal.set(this.childComponent.childProperty);
//       console.log('Log Child:', this.childSignal());
//     } else {
//       console.error('Child component is not available');
//     }
//   }


  // usecase -2
  // @ViewChild(SignalsVcChildComponent) set childComponent(instance: SignalsVcChildComponent | undefined) {
  //   if (instance) {
  //     this.childSignal.set(instance.childProperty);
  //   }
  // }

  // // Signal to hold the child property value
  // childSignal = signal<string | null>(null);

  // // Effect to track changes to the signal
  // dummy = effect(() => {
  //   console.log('Signal updated:', this.childSignal());
  // });

  // logChild() {
  //   console.log('Child Signal Value:', this.childSignal());
  // }


   // Use a setter for @ViewChildren to update the signal reactively
  // @ViewChildren(SignalsVcChildComponent) set childComponents(components: QueryList<SignalsVcChildComponent>) {
    // This setter is automatically called when the QueryList updates
  //   if (components) {
  //     const properties = components.map(child => child.childProperty);
  //     this.childPropertiesSignal.set(properties); // Update the signal
  //   }
  // }

  // Signal to store the properties of child components
  // childPropertiesSignal = signal<string[]>([]);

  // // Effect to react to changes in the signal
  // constructor() {
  //   effect(() => {
  //     console.log('Effect Triggered: Child Properties Updated:', this.childPropertiesSignal());
  //   });
  // }

//  dummy = effect(() => {
//   console.log('Effect Triggered: Child Properties Updated:', this.childPropertiesSignal());
// });

//   // Log child properties on button click
//   logChildren() {
//     console.log('Log Children:', this.childPropertiesSignal());
//   }

}
