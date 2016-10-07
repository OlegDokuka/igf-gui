import KPCREF from './kpcref';
import MenuBar from './menubar';

export const common = angular.
    module('IGF-GUI.Common', [
        MenuBar,
        KPCREF
    ])
    .name;

export default common;
