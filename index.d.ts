export declare interface Options {
    strict: boolean;
    storeAsString: boolean;
}
export declare function parse(value: string): any;
export declare function stringtify(value: any, replacer?: Function|Array<string>, space?: number|string): string;