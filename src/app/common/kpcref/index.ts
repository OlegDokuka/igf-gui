import KPCREFService from './kpcref.service';
import KPCREFState from './kpcref.state';
import KPCREFComponent from './kpcref.component';

export const kpcref = angular
    .module('KPCREF', [])
    .service('KPCREFService', KPCREFService)
    .component('igfgKPCREF', KPCREFComponent)
    .config(KPCREFState)
    .name;

export default kpcref;