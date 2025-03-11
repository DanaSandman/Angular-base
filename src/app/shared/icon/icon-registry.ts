import { IconType } from './icon.types';

// קובץ שמרכז את כל הגדרות האייקונים
export const ICONS = {
  [IconType.PLUS_CIRCLE]: `
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  `,

  [IconType.ARROW_LEFT]: `
    <path d="M19 12H5"></path>
    <path d="M12 19l-7-7 7-7"></path>
  `,

  [IconType.SHOPPING_CART]: `
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  `,

  [IconType.HEART]: `
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  `,
  //TODO: add more icons
};

export type IconName = keyof typeof ICONS;

export function getIconPath(name: string): string {
  return (name in ICONS) ? ICONS[name as IconName] : ICONS[IconType.PLUS_CIRCLE]; //default icon if name is not found
}