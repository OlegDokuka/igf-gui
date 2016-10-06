import { StateProvider, StateDeclaration } from 'angular-ui-router';

export const AuthConfig = ($stateProvider: StateProvider) =>
    $stateProvider
        .state("app.auth", {
            parent: "app",
            url: "/auth",
            component: "erAuth"
        } as StateDeclaration);
AuthConfig.$inject = ["$stateProvider"];

export default AuthConfig;