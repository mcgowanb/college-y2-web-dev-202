export class ServiceProvider {
    public details: string;
    public name: string;
    public imageUrl: string;
    public providerGroups: string[];
    public rating: number;
    public maxRating: number;

    constructor(name, details, imageUrl, rating) {
        this.name = name;
        this.details = details;
        this.imageUrl = imageUrl;
        this.rating = rating;
        this.providerGroups = ["gp one", "gp two", "gp three"];
        this.maxRating = 5;
    }
}