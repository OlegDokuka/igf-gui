import MenuBarComponent from './menubar.component';

export const menubar = angular
    .module('MenuBar', ['MenuItem'])
    .component('igfgMenuBar', MenuBarComponent)
    .name;

export default menubar;