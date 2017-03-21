export class SortOptions {
    key: String;
    value: String;



    constructor(key: String, value: String) {
        this.key = key;
        this.value = value;
    }


    public getKey(): String {
        return this.key;
    }

    public getValue(): String {
        return this.value;
    }
}