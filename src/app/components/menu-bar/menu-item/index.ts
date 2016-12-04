import MenuItemComponent from './menuitem.component';
import MenuItemController from './menuitem.controller';

export const menuitem = angular
    .module('MenuItem', [])
    .component('igfgMenuItem', MenuItemComponent)
    .name;
export { MenuItemController };

export default menuitem;