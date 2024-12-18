import { Component, computed, ContentChild, ContentChildren, ElementRef, QueryList, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 // Use ContentChild with Signal
//  @ContentChild('myContent', { static: false }) contentChild!: ElementRef;
//  // Signal to store content text
//  contentSignal = signal<string>('');

//  ngAfterContentInit() {
//    // Initialize the signal value with content from the projected child
//    this.contentSignal.set(this.contentChild.nativeElement.textContent.trim());
//  }
// Use ContentChildren with Signal
// @ContentChildren('cardItem', { descendants: true }) cardItems!: QueryList<ElementRef>;

// // Signal to store number of items
// itemsSignal = signal<number>(0);

// ngAfterContentInit() {
//   // Update signal value with number of content children
//   this.itemsSignal.set(this.cardItems.length);

//   // React to changes in projected content
//   this.cardItems.changes.subscribe(() => {
//     this.itemsSignal.set(this.cardItems.length);
//   });
// }
// @ContentChild('myContent') contentChild!: ElementRef;

// // Signal computed to access content reactively
// contentSignal: Signal<string> = computed(() =>
//   this.contentChild?.nativeElement.textContent.trim() || 'No Content'
// );
@ContentChildren('cardItem', { descendants: true}) cardItems!: QueryList<ElementRef>;

  // Signal to count the number of items reactively
  itemsSignal: Signal<number> = computed(() => this.cardItems?.length || 0);
}
