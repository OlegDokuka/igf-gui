import Auth from './auth';
import Evernote from './evernote';
import Account from './account';

export const common = angular.
    module("EvernoteReminder.Common", [
        Evernote,
        Account,
        Auth
    ])
    .name;

export default common;
