import { IComponentController } from 'angular';
import { StateService } from 'angular-ui-router';
import HomeServiceProvider from './home.service';

export class HomeController implements IComponentController {
    static $inject = ['$state', 'HomeService'];

    constructor(private $state: StateService, private HomeService: HomeServiceProvider) {
    }

    public prrocess(): void {
        const { $state, HomeService } = this;

        // HomeService.login(credential).then(() => $state.go('/'));
    }
}

export default HomeController;