import { Component, Input, OnInit } from '@angular/core';
import { getIconPath, ICONS } from './icon-registry';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: false
})
export class IconComponent implements OnInit {
  @Input() name: string = 'plus-circle';
  @Input() color?: string = 'black';
  @Input() size?: string = 'small';

  constructor() { }

  ngOnInit(): void {
    if (!(this.name in ICONS) && console) {
      console.warn(`Icon name "${this.name}" is not defined. Using default icon instead.`);
    }
  }
  
  getIconSvgPath(): string {
    return getIconPath(this.name as keyof typeof ICONS);
  }
} 