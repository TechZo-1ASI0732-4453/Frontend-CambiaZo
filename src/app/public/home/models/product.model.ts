import { SignUpUserDto } from "../../../auth/dtos/signUpUser.dto";
import { Location } from "../../../shared/models/location.model";

export interface Product{
    id: number;
    name: string;
    description: string;
    desiredObject: string;
    price: number;
    image: string;
    boost: boolean;
    available: boolean;
    user: SignUpUserDto;
    productCategory: ProductCategory;
    location: Location;
    createdAt: Date;
}

export interface ProductCategory{
    id: number;
    name: string;
}


