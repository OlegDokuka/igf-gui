import { IComponentOptions } from 'angular';
import controller from './home.controller';
import * as template from './home.template.html';

export const homeComponent: IComponentOptions = {
    template,
    controller
};

export default homeComponent;