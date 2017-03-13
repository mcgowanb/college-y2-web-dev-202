export class ServiceProvider {
    public details: string;
    public name: string;
    public imageUrl: string;
    public providerGroups: string[];
    public rating: number;

    constructor(name, details, imageUrl) {
        this.name = name;
        this.details = details;
        this.imageUrl = imageUrl;
        this.rating = 4;
        this.providerGroups = ["gp one", "gp two", "gp three"];
    }
}