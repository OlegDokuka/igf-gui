import { type } from 'os';
import { IComponentController } from 'angular';
import { MenuItemController } from './menu-item';
import { Window, Menu } from 'nw.gui';

export class MenuBarController extends MenuItemController implements IComponentController {
    public $postLink(): void {
        const menu = new Menu({ type: 'menubar' });

        menu.items = this.menuItems;
        console.log(type());
        if (type() === 'Darwin') {
            menu.createMacBuiltin('test');
        } else {
            Window.get().menu = menu;
        }
    }
}

export default MenuBarController;