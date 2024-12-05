import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-counter-with-signals',
  imports: [],
  templateUrl: './counter-with-signals.component.html',
  styleUrl: './counter-with-signals.component.css'
})
export class CounterWithSignalsComponent {
  readonly value = signal(0)
  constructor(){
   setInterval(() => {
      this.value.update(v => v+1)
      console.log(" Value: ", this.value())
    }, 1000)
  }
}
