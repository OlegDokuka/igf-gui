import { IQService, IPromise } from 'angular';


export class HomeService {
    static $inject = ['$q'];

    constructor(private $q: IQService) {
    }

    public proccess(): IPromise<any> {
        const { $q } = this;

        return $q((r, re) => r() || re());
    }
}

export default HomeService; 