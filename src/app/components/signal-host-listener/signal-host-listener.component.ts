import { Component, HostListener, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-signal-host-listener',
  imports: [],
  templateUrl: './signal-host-listener.component.html',
  styleUrl: './signal-host-listener.component.css'
})
export class SignalHostListenerComponent {
  areaClickCount = signal(0);
  buttonClickCount = signal(0);


  // Listen for clicks on the parent container
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Check if the clicked element is the div with class 'clickable-area'
    const clickedDiv = (event.target as HTMLElement).closest('.clickable-area');
    if (clickedDiv) {
      this.areaClickCount.update((count) => count + 1);
    }

    // Check if the clicked element is the button with class 'nothing-btn'
    const clickedButton = (event.target as HTMLElement).closest('.nothing-btn');
    if (clickedButton) {
      this.buttonClickCount.update((count) => count + 1);
    }
  }
}
