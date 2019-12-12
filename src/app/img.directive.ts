import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImg]'
})
export class ImgDirective {

  public defaultImage: string = '/assets/images/404.png';

  constructor(
    private renderer: Renderer2,
    private el: ElementRef) {
  }

  @HostListener('error') onError() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.defaultImage);
  }

}
