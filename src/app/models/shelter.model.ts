export class Shelter {
    name: string;
    location: string;
    locationUrl?: string;
    gender?: any;


    constructor(name: string, location: string, locationUrl?: string, gender?: any) {

        this.name = name;
        this.location = location;
        this.locationUrl = locationUrl;
        this.gender = gender;
    }
}
