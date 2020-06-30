import { Directive, Input, ElementRef, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTableSuccess]'
})
export class TableSuccessDirective implements OnInit{

  @Input('appTableSuccess')
  showClass: boolean;

  constructor(private elementRef: ElementRef) { 
  }

  ngOnInit(): void {
    if (this.showClass){
      this.elementRef.nativeElement.classList.add('table-success');
    } else {
      this.elementRef.nativeElement.classList.add('table-warning');
    }
  }

}
