import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {
  private isOpen = false;
  @HostBinding('class.open') get opened(): any {
    return this.isOpen;
  }
  @HostListener('click') open(): any {
    this.isOpen = true;
  }
  @HostListener('mouseleave') close(): any {
    this.isOpen = false;
  }

}
