export interface Options {
    strict: boolean;
    storeAsString: boolean;
}
export function parse(option?: Options): any;
export function stringify(value: any, replacer?: Function|Array<string>, space?: number|string): string;