import {Directive, ElementRef, Input, OnInit, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSomeDirective]'
})
export class SomeDirectiveDirective implements OnInit{
  @Input() appSomeDirective: boolean;

  constructor(public el: ElementRef, public renderer: Renderer2) { }

  ngOnInit(){
    if(this.appSomeDirective) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
  }


}
