import { IComponentController } from 'angular';
import { StateService } from 'angular-ui-router';
import { Window, Menu, MenuItem } from 'nw.gui';

export class MenuBarController implements IComponentController {
    private current: string;
    private menu: Menu;

    constructor($state: StateService) {
        'ngInject';

        this.current = $state.current.name;
        this.menu = new Menu({ type: 'menubar' });
        this.menu.append(new MenuItem({ label: 'test' }));

        Window.get().menu = this.menu;
    }
}

export default MenuBarController;