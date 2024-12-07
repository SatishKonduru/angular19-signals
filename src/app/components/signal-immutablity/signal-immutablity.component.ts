
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-immutablity',
  imports: [],
  templateUrl: './signal-immutablity.component.html',
  styleUrl: './signal-immutablity.component.css'
})
export class SignalImmutablityComponent {
  names = signal(['Satish'])
  emp = signal({name:'Satish'})
  std = signal([{name:'RENU'}])
  constructor(){
    setTimeout(() => {
      // this.names().push('Konduru')
      this.names.update(v => [...v, 'Konduru'])
      console.log("Names: ", this.names())
      this.emp.update(employee => ({...employee,   name: 'RSK'}))
      console.log("emp: ", this.emp())
      this.std.update(std => [...std, {name: 'SATISH'} ])
      console.log("Students: ", this.std())
    }, 3000)



  }
}
