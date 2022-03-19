import {
  ViewContainerRef,
  AfterViewInit,
  Directive,
  Input,
  TemplateRef,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appObjectFor]',
})
export class ObjectForDirective implements AfterViewInit {
  @Input('appObjectFor') ObjectFor: any;

  constructor(
    private elementRef: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngAfterViewInit(): void {
    console.log(this.ObjectFor);
    console.log(this.elementRef);
    this.viewContainer.clear();
    for (const key in this.ObjectFor) {
      console.log(this.ObjectFor[key]);

      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: this.ObjectFor[key],
      });
      // return this.ObjectFor[key];
    }
  }
}
