import { IComponentController } from 'angular';
import { StateService } from 'angular-ui-router';
import KPCREFServiceProvider from './kpcref.service';

export class KPCREFController implements IComponentController {
    static $inject = ['$state', 'KPCREFService'];

    constructor(private $state: StateService, private KPCREFService: KPCREFServiceProvider) {
    }

    public prrocess(): void {
        const { $state, KPCREFService } = this;

        // KPCREFService.login(credential).then(() => $state.go('/'));
    }
}

export default KPCREFController;