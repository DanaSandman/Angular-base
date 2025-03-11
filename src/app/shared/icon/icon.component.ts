import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <span [ngClass]="size" class="icon-wrapper" [ngStyle]="{ 'color': color }">
      <!-- Plus circle icon -->
      <ng-container *ngIf="name === 'plus-circle'">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      </ng-container>
      
      <!-- Fallback for any other icon name -->
      <ng-container *ngIf="name !== 'plus-circle'">
        <span class="text-icon">+</span>
      </ng-container>
    </span>
  `,
  styles: [`
    .icon-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    
    .small { 
      width: 16px; 
      height: 16px; 
    }
    
    .medium { 
      width: 24px; 
      height: 24px; 
    }
    
    .large { 
      width: 32px; 
      height: 32px; 
    }
    
    svg {
      width: 100%;
      height: 100%;
    }
    
    .text-icon {
      font-weight: bold;
      font-size: 16px;
    }
  `]
})
export class IconComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() color: string = '';
  @Input() size: string = 'medium';

  constructor() { }

  ngOnInit(): void { }
} 