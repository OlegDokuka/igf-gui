import MenuBarComponent from './menubar.component';

export const menubar = angular
    .module('MenuBar', [])
    .component('igfgMenuBar', MenuBarComponent)
    .name;

export default menubar;