import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[Ligthbox]'
})
export class LigthboxDirective implements OnChanges{
  @Input('Ligthbox') bgColor:string="aqua";
  @Input() shadowcolor:string="black";


  constructor(private elementref:ElementRef) { 
    // this.elementref.nativeElement.style.boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.2)";
  }
  ngOnChanges():void {
    // this.elementref.nativeElement.style.boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.9)";
    this.elementref.nativeElement.style.backgroundColor=` ${this.bgColor}`;
    
  }
 @HostListener('mouseover') mouseOver(){
    this.elementref.nativeElement.style.boxShadow=`10px 5px 5px 1px ${this.bgColor}`;
    this.elementref.nativeElement.style.backgroundColor=` ${this.bgColor}`;
  }
 

  @HostListener('mouseout') mouseOut(){
    this.elementref.nativeElement.style.boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.2)";
    this.elementref.nativeElement.style.backgroundColor=` white`;
  }
}
