import { IComponentController, IScope, IAngularEvent } from 'angular';
import { MenuItem, Menu } from 'nw.gui';
import { ADD_MENU_ITEM } from './actions';

export class MenuItemController implements IComponentController, NWJS_Helpers.MenuItemOption {
    private items: MenuItem[];

    constructor(private $scope: IScope) {
        'ngInject';

        $scope.$on(ADD_MENU_ITEM, ({}, mi) => this.onAddMenuItem(mi));
    }

    public onAddMenuItem(menuItem: MenuItem): void {
        this.items.push(menuItem);
    }

    public $postLink(): void {
        const menuItem = new MenuItem(this);

        if (this.items.length) {
            menuItem.submenu = new Menu();
            menuItem.submenu.items = this.items;
        }

        this.$scope.$emit(ADD_MENU_ITEM, menuItem);
    }

    public get menuItems(): MenuItem[] {
        return this.items;
    }
}

export default MenuItemController;