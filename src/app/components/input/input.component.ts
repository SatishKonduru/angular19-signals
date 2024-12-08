import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnChanges{
@Input() fValue: number
@Input() sValue: number
result : number

ngOnChanges(): void {
  this.result = Number(this.fValue) + Number(this.sValue);
}
}
