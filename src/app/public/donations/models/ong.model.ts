import { CategoryOng } from "./category-ong.model";

export interface Ong {
    id: number;
    name: string;
    type: string;
    aboutUs: string;
    missionAndVision: string;
    supportForm: string;
    address: string;
    email: string;
    phone: string;
    logo: string;
    website: string;
    schedule: string;
    categoryOngId: number;
}

export interface OngDetails {
    id: number;
    name: string;
    type: string;
    aboutUs: string;
    missionAndVision: string;
    supportForm: string;
    address: string;
    email: string;
    phone: string;
    logo: string;
    website: string;
    schedule: string;
    createdAt: string;
    updatedAt: string;
    categoryOngId: CategoryOng;
    projects: Project[];
    accountNumbers: AccountNumber[];
    socialNetworks: SocialNetwork[];
}

export interface Project {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    description: string;
    ongId: number;
}

export interface AccountNumber {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    cci: string;
    account: string;
    ongId: number;
}

export interface SocialNetwork {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    url: string;
    ongId: number;
}