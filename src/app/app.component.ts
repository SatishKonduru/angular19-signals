import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, combineLatest, debounceTime, interval, map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular19-signals';
  colors$ = new BehaviorSubject<any>({r: 'Red', g: 'Green', b: 'Blue'})
  colorKey$ = new BehaviorSubject('r')
  // slectectedValue$ = combineLatest([this.colors$, this.colorKey$])
  //                   .pipe(
  //                     debounceTime(1000),
  //                     map(([color, key]) => color[key]),
  //                   )
  selectedValue$ = this.colorKey$.pipe(withLatestFrom(this.colors$), map(([key, colors]) => colors[key]));
  constructor(){
   this.selectedValue$.subscribe(console.log)
  }

  // ColorObj = {r: 'Red', g: 'Green', b: 'Blue'}
  // key = 'r'

  newColors() {
    this.colors$.next({y: 'Yelow', o: 'Orange', p: 'Purple'})
    this.colorKey$.next('o')
  }

}
