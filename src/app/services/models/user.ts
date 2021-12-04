export interface User {
    name: string;
    email: string;
    birthday: Date;
    address: {
        street: {
            number: string;
            name: string;
        }
        city: string;
        state: string;
        postcode: string;
        country: string;
    };
    phone_number: string;
    password: string;
    picture: string;
}