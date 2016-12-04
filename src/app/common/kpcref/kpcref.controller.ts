import { IComponentController } from 'angular';
import { StateService } from 'angular-ui-router';
import KPCREFServiceProvider from './kpcref.service';
import * as scenario from './kpcref.scenario.json';

export class KPCREFController implements IComponentController {
    private scenario;
    private test1 = 0;

    constructor(private $state: StateService, private KPCREFService: KPCREFServiceProvider) {
        'ngInject';

        this.scenario = scenario;
    }

    public process(): void {
        const { $state, KPCREFService } = this;
        // console.log(this.test1);

        KPCREFService.process([+this.test1]);

        // KPCREFService.login(credential).then(() => $state.go('/'));
    }
}

export default KPCREFController;