export class Shelter {
    name: string;
    location: string;
    locationUrl?: string;
    gender?: any;
    image?: string;
    description?: string;


    constructor(name: string, location: string, locationUrl?: string, gender?: any, image?: any, description?: string) {

        this.name = name;
        this.location = location;
        this.locationUrl = locationUrl;
        this.gender = gender;
        this.image = image;
        this.description = description;
    }
}
