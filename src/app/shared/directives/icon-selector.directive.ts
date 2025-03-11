import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { IconType } from '../icon/icon.types';

@Directive({
  selector: '[iconSelector]'
})
export class IconSelectorDirective {
  @Output() iconSelected = new EventEmitter<IconType>();
  
  constructor(private el: ElementRef) {}
  
  @HostListener('click')
  onClick() {
    // צור רשימה נפתחת של אייקונים זמינים
    const allIcons = Object.values(IconType);
    const selectBox = document.createElement('select');
    
    // הוסף אפשרות לכל אייקון
    allIcons.forEach(icon => {
      const option = document.createElement('option');
      option.value = icon;
      option.textContent = icon;
      selectBox.appendChild(option);
    });
    
    // הוסף אירוע לבחירת אייקון
    selectBox.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      this.iconSelected.emit(target.value as IconType);
    });
    
    // הצג את הרשימה הנפתחת
    this.el.nativeElement.appendChild(selectBox);
  }
} 