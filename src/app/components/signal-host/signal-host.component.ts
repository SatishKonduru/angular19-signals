import { Component, computed, HostBinding, signal } from '@angular/core';

@Component({
  selector: 'app-signal-host',
  imports: [],
  templateUrl: './signal-host.component.html',
  styleUrl: './signal-host.component.css'
})
export class SignalHostComponent {
 // Signal to track the size of the component
 isLarge = signal(false);

 // Signal to track the theme of the component
 isDarkMode = signal(false);

 // Computed signal to combine styles from both signals
 private combinedStyles = computed(() => ({
   // Styles for size
   border: this.isLarge() ? '3px solid #000' : '10px solid #4af',
   width: this.isLarge() ? '1080px' : '500px',
   height: this.isLarge() ? '760px' : '200px',

   // Styles for theme
   backgroundColor: this.isDarkMode() ? '#333' : '#fff',
   color: this.isDarkMode() ? '#fff' : '#000',
 }));

 // HostBinding to dynamically set the `style` attribute
 @HostBinding('style')
 get hostStyle() {
   return this.combinedStyles(); // Merge styles from both signals
 }

 // Method to toggle size
 toggleSize() {
   this.isLarge.set(!this.isLarge());
 }

 // Method to toggle theme
 toggleTheme() {
   this.isDarkMode.set(!this.isDarkMode());
 }
}
