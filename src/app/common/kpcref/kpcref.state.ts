import { StateProvider, StateDeclaration } from 'angular-ui-router';

export const KPCREFConfig = ($stateProvider: StateProvider) => {
    'ngInject';

    $stateProvider
        .state('app.KPCREF', {
            url: '/KPCREF',
            component: 'igfgKPCREF'
        } as StateDeclaration);
};

export default KPCREFConfig;