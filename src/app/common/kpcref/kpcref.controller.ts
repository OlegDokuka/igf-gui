import { IComponentController } from 'angular';
import { StateService } from 'angular-ui-router';
import KPCREFServiceProvider from './kpcref.service';

export class KPCREFController implements IComponentController {

    constructor(private $state: StateService, private KPCREFService: KPCREFServiceProvider) {
        'ngInject';
    }

    public process(): void {
        const { $state, KPCREFService } = this;

        // KPCREFService.login(credential).then(() => $state.go('/'));
    }
}

export default KPCREFController;