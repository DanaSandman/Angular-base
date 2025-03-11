import { Directive, Input } from '@angular/core';
import { IconType } from '../icon/icon.types';

@Directive({
  selector: '[withIcons]',
  exportAs: 'icons'
})
export class WithIconsDirective {
  readonly types = IconType;
} 