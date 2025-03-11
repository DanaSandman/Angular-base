import { Component, Input, OnInit } from '@angular/core';
import { getIconPath, ICONS } from './icon-registry';
import { IconType } from './icon.types';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: false
})
export class IconComponent implements OnInit {
  @Input() set name(value: string | IconType) {
    this._name = value;
  }
  
  private _name: string | IconType = IconType.PLUS_CIRCLE;
  
  @Input() color?: string = 'black';
  @Input() size?: string = 'small';

  constructor() { }

  ngOnInit(): void {
    if (!(this.iconName in ICONS) && console) {
      console.warn(`Icon name "${this.iconName}" is not defined. Using default icon instead.`);
    }
  }
  
  get iconName(): IconType {
    if (this._name in IconType) {
      return this._name as IconType;
    }
    
    const found = Object.entries(IconType).find(([_, val]) => val === this._name);
    return found ? IconType[found[0] as keyof typeof IconType] : IconType.PLUS_CIRCLE;
  }

  getIconSvgPath(): string {
    return getIconPath(this.iconName as keyof typeof ICONS);
  }
} 