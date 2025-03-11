import { Component, OnInit } from '@angular/core';
import { IconService } from '../../../core/services/icon.service';

@Component({
  selector: 'app-icon-gallery',
  template: `
    <div class="icon-gallery">
      <h2>אייקונים זמינים</h2>
      <div class="icons-container">
        <div class="icon-item" *ngFor="let icon of icons">
          <app-icon [name]="icon.value"></app-icon>
          <div class="icon-name">{{icon.name}}</div>
          <div class="icon-value">{{icon.value}}</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .icon-gallery {
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 5px;
      margin: 20px 0;
    }
    .icons-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
      width: 120px;
    }
    .icon-name {
      font-weight: bold;
      margin-top: 10px;
    }
    .icon-value {
      font-size: 12px;
      color: #666;
    }
  `]
})
export class IconGalleryComponent implements OnInit {
  icons: {name: string, value: string}[] = [];

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
    this.icons = this.iconService.getAllIcons();
  }
} 