import { Component, ElementRef, signal, Signal, ViewChild, effect, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-signals-vc',
  imports: [],
  templateUrl: './signals-vc.component.html',
  styleUrl: './signals-vc.component.css'
})
export class SignalsVcComponent {
  // @ViewChild('header',{read: signal}) headerRef : ElementRef;
  // @ViewChildren('item', {read:signal}) itemsRef!: QueryList<ElementRef>;
  colorSignal = signal('red');
  itemsList = ['Item-1', 'Item-2', 'Item-3', 'Item-4'];
  constructor(){
    // this.startColorChange();
    // this.startColorToggle();
    // effect(() => {
    //   this.startColorChange();
    //   this.startColorToggle();
    // })
  }
   // effect declared directly in the class body
   private colorEffect = effect(() => {
    this.startColorChange();
    this.startColorToggle();
  });


  colors  = this.itemsList.map(() => signal(''));
  startColorChange() {
    setInterval(() => {
      const randomColor = this.getRandomColor();
      this.colorSignal.set(randomColor);

    }, 1000);
  }
  private startColorToggle(): void {

    setInterval(() => {

        this.itemsList.forEach((_, index) => {
        const newColor = this.getRandomColor();
        this.colors[index].set(newColor); // Update the color signal
      });
    }, 2000); // Update colors every 2 seconds
  }
  private getRandomColor(): string {
    console.log("Random color: ", `#${Math.floor(Math.random() * 16777215).toString(16)}`)
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
