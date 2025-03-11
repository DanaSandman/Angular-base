import { IconType } from '../shared/icon/icon.types';

export interface GlobalState {
  icons: typeof IconType;
}

export const initialState: GlobalState = {
  icons: IconType
}; 