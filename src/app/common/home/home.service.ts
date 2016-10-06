import { EvernoteClient as EvernoteClientService } from '../evernote';
import { Evernote } from 'evernote';
import { IQService, IPromise } from 'angular';


export class AuthService {
    static $inject = ["$q", "EvernoteClient"];

    constructor(private $q: IQService, private EvernoteClient: EvernoteClientService) {
    }

    public login(credentials: { token: string }): IPromise<Evernote.User> {
        const { EvernoteClient, $q } = this;

        localStorage.setItem(EvernoteClientService.TOKEN_KEY, credentials.token);
        EvernoteClient[EvernoteClientService.TOKEN_KEY] = credentials.token;

        return $q((r, re) =>
            this.EvernoteClient.getUserStore().getUser((e, p) => e ? re(e) : r(p))
        );
    }

    public authorize(): IPromise<any> {
        const { $q } = this;

        return null;
    }
}

export default AuthService; 