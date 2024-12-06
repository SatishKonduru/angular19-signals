import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-reactive-context-with-effect',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './reactive-context-with-effect.component.html',
  styleUrl: './reactive-context-with-effect.component.css'
})
export class ReactiveContextWithEffectComponent {
  readonly x = signal(100)
  readonly y = signal(0)

  constructor(){

    effect(() => {
      // if(this.x() > 105){
      //   console.log("X is Greater than 105")
      //   this.y.set(200)
      // }
      this.x.set(this.y() + 1)
      // this.y.set(this.x() + 1)
    })
  }
  incrementX(){
    this.x.update(v => v + 1)
  }
}
