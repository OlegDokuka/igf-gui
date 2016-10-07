import HomeService from './home.service';
import HomeState from './home.state';
import HomeComponent from './home.component';

export const Home = angular
    .module('Home', [])
    .service('HomeService', HomeService)
    .component('igfgHome', HomeComponent)
    .config(HomeState)
    .name;

export default Home;