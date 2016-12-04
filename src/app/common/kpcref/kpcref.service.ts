import { IQService, IPromise } from 'angular';
import { spawn } from 'child_process';


export class KPCREFService {
    constructor(private $q: IQService) {
        'ngInject';
    }

    public process(data: Array<number>): IPromise<any> {
        const { $q } = this;

        return $q((r, re) => this.doProcess(data) || r() || re());
    }

    private doProcess(data: Array<number>): void {
        const bat = spawn('cmd.exe', ['/c', 'KPCREF']);
        bat.stdout.on('data', (data: any) => {
            console.log(data.toString('utf8'));
        });

        bat.stderr.on('data', (data) => {
            console.log(data);
        });

        bat.on('data', (code) => {
            console.log(`Child exited with code ${code}`);
        });

        data.forEach(d => bat.stdin.write(d, () => { }));

    }
}

export default KPCREFService; 