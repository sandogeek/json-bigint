declare namespace JSONLong {
    interface Options {
        strict: boolean;
        storeAsString: boolean;
    }
    function parse(option?: Options): any;
    function stringify(value: any, replacer?: Function|Array, space?: number|string): string;
}