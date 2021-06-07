import { AfterViewInit, Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appReplaceTag]'
})

export class ReplaceTagDirective implements AfterViewInit {

  constructor(private ref: ElementRef) { }

  ngAfterViewInit(): void {
    const element: HTMLElement = this.ref.nativeElement;
    element.replaceWith(...Array.from(element.childNodes));
  }

}
