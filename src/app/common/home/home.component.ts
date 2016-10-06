import { IComponentOptions } from 'angular';
import controller from './auth.controller';
import * as template from './auth.template.html';

export const AuthComponent: IComponentOptions = {
    template,
    controller
};

export default AuthComponent;