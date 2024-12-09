import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, inject, Injector, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-traditional-vc',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './traditional-vc.component.html',
  styleUrl: './traditional-vc.component.css'
})
export class TraditionalVcComponent {
@ViewChild('heading') headerRef !: ElementRef;
@ViewChildren('item') itemsRef : QueryList<ElementRef>
itemsList = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
// ngOnInit(){
//   this.headerRef.nativeElement.style.backgroundColor = 'purple';
//   this.headerRef.nativeElement.style.color = 'white';
//   this.headerRef.nativeElement.style.padding = '20px';
//   this.headerRef.nativeElement.style.borderRadius = '15px';
//   this.headerRef.nativeElement.style.boxShadow = '0px 8px 18px #000';
// }
ngAfterViewInit() {

  this.headerRef.nativeElement.style.backgroundColor = 'purple';
  this.headerRef.nativeElement.style.color = 'white';
  this.headerRef.nativeElement.style.padding = '20px';
  this.headerRef.nativeElement.style.borderRadius = '15px';
  this.headerRef.nativeElement.style.boxShadow = '0px 8px 18px #000';

  this.itemsRef.forEach((item, index) => {
    item.nativeElement.style.color = index % 2 === 0 ? 'blue' : 'green'; // Apply styles dynamically
    });
}
}
