import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[Theme]'
})
export class ThemeDirective {
  @Input() themeColor: string;
  @HostBinding('style.--card-theme') color: string;
  
  constructor() { }
}