import AuthService from './auth.service';
import AuthState from './auth.state';
import AuthComponent from './auth.component';

export const auth = angular
    .module('Auth', [])
    .service('AuthService', AuthService)
    .component('erAuth', AuthComponent)
    .config(AuthState)
    .name;

export default auth;