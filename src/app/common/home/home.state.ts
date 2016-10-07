import { StateProvider, StateDeclaration } from 'angular-ui-router';

export const HomeConfig = ($stateProvider: StateProvider) =>
    $stateProvider
        .state('app.home', {
            parent: 'app',
            url: '/home',
            component: 'igfgHome'
        } as StateDeclaration);
HomeConfig.$inject = ['$stateProvider'];

export default HomeConfig;