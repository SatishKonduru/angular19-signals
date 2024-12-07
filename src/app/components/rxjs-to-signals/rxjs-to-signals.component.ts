import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-rxjs-to-signals',
  imports: [CommonModule, MatChipsModule],
  templateUrl: './rxjs-to-signals.component.html',
  styleUrl: './rxjs-to-signals.component.css'
})
export class RxjsToSignalsComponent {
  private _http = inject(HttpClient)
  private _URL = 'https://jsonplaceholder.typicode.com/users/1'

  // RxJS Observable fetching user data
  private userObservable$ = this._http.get<{ name: string; email: string }>(this._URL);

   // Convert the Observable into a Signal
  user = toSignal(this.userObservable$);
}
