import { Component, ElementRef, signal, Signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signals-vc',
  imports: [],
  templateUrl: './signals-vc.component.html',
  styleUrl: './signals-vc.component.css'
})
export class SignalsVcComponent {
  @ViewChild('header') headerRef : ElementRef;
  colorSignal = signal('red');

  constructor(){
    this.startColorChange();
  }

  startColorChange() {
    setInterval(() => {

      const randomColor = this.getRandomColor();
      this.colorSignal.set(randomColor);
    }, 1000);
  }

  private getRandomColor(): string {
    console.log("Random color: ", `#${Math.floor(Math.random() * 16777215).toString(16)}`)

    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
