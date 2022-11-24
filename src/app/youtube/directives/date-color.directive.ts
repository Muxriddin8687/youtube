import {
  Directive, Input, ElementRef, Renderer2, AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appDateColor]',
})
export class DateColorDirective implements AfterViewInit {
  @Input() appDateColor?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    if (this.appDateColor) {
      const currentColor = this.getColor(this.appDateColor);
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        currentColor,
      );
    }
  }

  getColor(date: string): string {
    const currentDate = new Date();
    const itemDate = new Date(date);
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = currentDate.getTime() <= itemDate.getTime() ? 0 : Math.round(Math.abs((+currentDate - +itemDate) / oneDay));
    let diffmonths = (currentDate.getFullYear() - itemDate.getFullYear()) * 12;
    diffmonths -= itemDate.getMonth();
    diffmonths += currentDate.getMonth();
    diffmonths = diffmonths <= 0 ? 0 : diffmonths;
    if (diffmonths > 6) {
      return 'red';
    } if (diffmonths >= 1 && diffDays >= 30) {
      return 'yellow';
    } if (diffDays >= 7 && diffDays <= 30) {
      return 'green';
    } return 'blue';
  }
}
