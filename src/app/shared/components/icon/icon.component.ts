import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <svg class="icon" [ngClass]="size" [ngStyle]="{ 'color': color }">
      <use [attr.xlink:href]="'assets/icons/sprite.svg#' + name"></use>
    </svg>
  `,
  styles: [`
    .icon {
      fill: currentColor;
      width: 24px;
      height: 24px;
      display: inline-block;
      vertical-align: middle;
    }
    
    .small { width: 16px; height: 16px; }
    .medium { width: 24px; height: 24px; }
    .large { width: 32px; height: 32px; }
  `]
})
export class IconComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() color: string = '';
  @Input() size: string = 'medium';

  constructor() { }

  ngOnInit(): void { }
} 