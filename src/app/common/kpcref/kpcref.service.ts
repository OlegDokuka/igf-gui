import { IQService, IPromise } from 'angular';


export class KPCREFService {
    static $inject = ['$q'];

    constructor(private $q: IQService) {
    }

    public process(): IPromise<any> {
        const { $q } = this;

        return $q((r, re) => r() || re());
    }
}

export default KPCREFService; 