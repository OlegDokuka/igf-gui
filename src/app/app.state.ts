import { StateProvider, StateDeclaration } from 'angular-ui-router';

export const AppConfig = ($stateProvider: StateProvider) =>
    $stateProvider
        .state("app", {
            abstract: true,
            component: "erApp",
        } as StateDeclaration);
AppConfig.$inject = ["$stateProvider"];

export default AppConfig;