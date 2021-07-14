import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHighLight]'
})
export class AppHighLightDirective {

  private selectedElement:ElementRef;

  constructor(private el:ElementRef) { 
    this.selectedElement = el;
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor("yellow");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor("");
  }

  private setColor(color:string) {
    this.selectedElement.nativeElement.style.backgroundColor = color;
  }

}
