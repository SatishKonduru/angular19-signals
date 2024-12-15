import { Component } from '@angular/core';

@Component({
  selector: 'app-signals-vc-child',
  imports: [],
  templateUrl: './signals-vc-child.component.html',
  styleUrl: './signals-vc-child.component.css'
})
export class SignalsVcChildComponent {
  childProperty = "This is Child Property"
}
