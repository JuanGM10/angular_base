import { Item, ControlItem, Icon } from 'src/app/models/frontend';

export {Item, ControlItem} from 'src/app/models/frontend';

export interface Dictionaries {
  categories : Dictionary,
  marca: Dictionary
}

export interface Dictionary {
    items: Item[];
    controlItems: ControlItem[];
}
