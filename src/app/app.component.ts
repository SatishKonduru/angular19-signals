import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'angular19-signals';

  counter = 0;
  // readonly changeDetector = inject(ChangeDetectorRef)
  constructor(){
    setInterval(() => {
      this.counter++
      console.log("Counter Value: ", this.counter)
    }, 1000)

    // setInterval(() => {
    //   this.changeDetector.detectChanges()
    // }, 5000)
  }

  randomNumber(){
     console.log("Random Number: ",Math.random())

  }

  doNothing(){
    console.log("Nothing......")
  }
}
