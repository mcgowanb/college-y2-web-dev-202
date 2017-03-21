export class ProviderGroup{
    private name: string;
    public checked: boolean;
    public id: number;
    constructor(name, id)
    {
        this.name = name;
        this.checked = true;
        this.id = id;
    }

}