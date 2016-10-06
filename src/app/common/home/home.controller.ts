import { IComponentController } from 'angular';
import { StateService } from 'angular-ui-router';
import AuthServiceProvider from './auth.service';

export class AuthController implements IComponentController {
    static $inject = ["$state", "AuthService"];

    constructor(private $state: StateService, private AuthService: AuthServiceProvider) {
    }

    public auth(credential) {
        const { $state, AuthService } = this;

        AuthService.login(credential).then(() => $state.go('/'));
    }
}

export default AuthController;