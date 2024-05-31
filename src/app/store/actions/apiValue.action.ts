export interface ApiValue {
    name: string;
    type: string;
}

export class apiValueAction {
    static readonly type = '[getApi] apiValueAction';
    constructor(public apiValue: ApiValue){}
}