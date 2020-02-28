import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector : '[appDropdown]'
})

export class dropdownDirective {
  @HostBinding('class.open') isDropOpen = false;
  @HostListener('document : click', ['$event']) dropdownOpen(event: Event) {
    this.isDropOpen = this.elRef.nativeElement.contains(event.target) ? !this.isDropOpen : false
  }
  constructor(private elRef: ElementRef) {}
}
