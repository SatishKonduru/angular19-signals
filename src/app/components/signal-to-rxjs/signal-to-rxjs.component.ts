import { CommonModule } from '@angular/common';
import { Component, effect, signal, WritableSignal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-signal-to-rxjs',
  imports: [CommonModule, MatChipsModule, MatIconModule, FormsModule],
  templateUrl: './signal-to-rxjs.component.html',
  styleUrl: './signal-to-rxjs.component.css'
})
export class SignalToRxjsComponent {
  // Signal to track input value
  searchQuery = signal('');

  // Convert the Signal to an Observable
  private searchQuery$ = toObservable(this.searchQuery);

  // Debounced value
  textForSearch = '';

  constructor() {
      this.searchQuery$.subscribe((res) => {
      this.textForSearch = res;
    });
  }
}

