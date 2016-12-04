import { IComponentOptions } from 'angular';
import controller from './menuitem.controller';

export const MenuItemComponent: IComponentOptions = {
    bindings: {
        label: '@',
        icon: '@',
        tooltip: '@',
        type: '@',
        onClick: '&',
        enabled: '<',
        checked: '<',
        key: '@',
        modifiers: '@'
    },
    controller
};

export default MenuItemComponent;