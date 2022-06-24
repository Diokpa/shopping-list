
import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}

// Toggle dropdown with Renderer above code done with @Hostbinding syntax
// import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

// @Directive({
//   selector: '[appDropdown]'
// })

// export class DropdownDirective {

//   isOpen = false;

//   constructor(private elRef: ElementRef, private renderer: Renderer2) { }

//   @HostListener('click') toggleOpen () {
//     this.isOpen = !this.isOpen;

//     if (this.isOpen) {
//       this.renderer.addClass(this.elRef.nativeElement, 'open');
//     } else {
//       this.renderer.removeClass(this.elRef.nativeElement, 'open')
//     }
//   }
// }

//----------------------

// Toggle dropdown by clicking anywhere on the page
// import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen = false;
//   @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
//     this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
//   }
//   constructor(private elRef: ElementRef) {}
// }
