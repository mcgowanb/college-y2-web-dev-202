export class ProviderGroup{
    private name: string;
    public checked: boolean;
    private id: number;
    constructor(name, id)
    {
        this.name = name;
        this.checked = false;
        this.id = id;
    }

}