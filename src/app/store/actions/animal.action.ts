export interface ZebraFood {
    name: string;
    hay: number;
    carrots: number;
}

export class FeedZebra {
    static readonly type = '[Zoo] FeedZebra';
    constructor(public zebraToFeed: ZebraFood) {}
}