import { ICONS } from "./icon-registry";

// This file contains all icon-related types and enums
export enum IconType {
  PLUS_CIRCLE = 'plus-circle',
  ARROW_LEFT = 'arrow-left',
  SHOPPING_CART = 'shopping-cart',
  HEART = 'heart',
  // Add more icons here as they're added to the registry
}

// For backwards compatibility
export type IconName = keyof typeof ICONS; 