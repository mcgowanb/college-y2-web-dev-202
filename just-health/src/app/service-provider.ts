import { ProviderGroup } from './provider-group';

export class ServiceProvider {
    public details: string;
    public name: string;
    public imageUrl: string;
    public providerGroups: ProviderGroup[];
    public rating: number;
    public maxRating: number;

    constructor(name, details, imageUrl, rating, providerGroups) {
        this.name = name;
        this.details = details;
        this.imageUrl = imageUrl;
        this.rating = rating;
        this.providerGroups = providerGroups;
        this.maxRating = 5;
    }
}