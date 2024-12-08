import { CommonModule } from '@angular/common';
import { Component, EventEmitter, output, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-output',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  // @Output() message = new EventEmitter()
  message = output<string>()
  onReplay(){
    this.message.emit('Hey , I am from output component')
  }
}
