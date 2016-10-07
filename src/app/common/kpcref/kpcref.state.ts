import { StateProvider, StateDeclaration } from 'angular-ui-router';

export const KPCREFConfig = ($stateProvider: StateProvider) =>
    $stateProvider
        .state('app.KPCREF', {
            url: '/KPCREF',
            component: 'igfgKPCREF'
        } as StateDeclaration);
KPCREFConfig.$inject = ['$stateProvider'];

export default KPCREFConfig;