import { CommonModule } from '@angular/common';
import { Component, effect, EffectRef, inject, Injector, runInInjectionContext, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-counter-with-signals',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './counter-with-signals.component.html',
  styleUrl: './counter-with-signals.component.css'
})
export class CounterWithSignalsComponent {
  readonly value = signal(0)
  readonly injector = inject(Injector)
  private _effectRef: EffectRef | null = null
  constructor(){
   setInterval(() => {
      this.value.update(v => v+1)
    }, 1000)


  }

  start(){
    // runInInjectionContext(this.injector, () => {
    //   effect(() => console.log("Value: ", this.value()))
    // })
    this._effectRef = effect(() => {console.log("Value: ", this.value())} , {injector: this.injector})
  }
  stop(){
    this._effectRef.destroy()
    this._effectRef = null
  }
}
