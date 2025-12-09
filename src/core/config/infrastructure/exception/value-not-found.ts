export class ValueNotFound extends Error {
    constructor(valueKey: string) {
        super("Value not found: " + valueKey);
    }
}