import { IQService, IPromise } from 'angular';


export class KPCREFService {
    constructor(private $q: IQService) {
        'ngInject';
    }

    public process(): IPromise<any> {
        const { $q } = this;

        return $q((r, re) => r() || re());
    }
}

export default KPCREFService; 