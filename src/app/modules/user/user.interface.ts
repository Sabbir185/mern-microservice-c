/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types, Model } from "mongoose"
import { USER_ROLE } from "./user.constant";

export type TUser = {
    _id?: Types.ObjectId;
    name: string,
    email: string | undefined | null;
    phone: string | undefined | null;
    password: string;
    role: string;
    gender: string;
    isDeleted: boolean;
    isVerified: boolean;
    otp?: string;
    image?: string;
    driving_license?: string;
    date_of_birth?: string;
    date_of_birth_hijri?: string;
    joining_date?: string;
    address?: string;
    identityNumber: string;
    personal_id_card?: {
        front: string;
        back: string;
    };
    isActive: boolean;
    position?: {
        lat: number;
        lng: number;
    };
    location?: {
        type: string;
        coordinates: number[];
    };
    station?: Types.ObjectId;
    company?: Types.ObjectId;
    status: 'pending' | 'approved' | 'cancelled' | 'suspended';
    fcm_token: [string];
    permissions: Types.ObjectId;
}

export interface UserModel extends Model<TUser, any, any, any, any, any, any>{
    isPasswordMatched(password: string, hashedPassword: string): Promise<boolean>,
    isJWTIssuedBeforePasswordChanged(passwordChangedTimestamp: Date,jwtIssuedTimestamp: number): boolean;
    isUserExists({_id, email, phone}: {_id: string, email: string, phone: string}): Promise<TUser>;
    isUserExistsById(_id: string): Promise<TUser>;
    aggregatePaginate(query: any, options: any): Promise<any>
}

export type TUserQuery = {
    _id?: string | undefined;
    email?: string | undefined; 
    phone?: string | undefined;
}

export type TUserPasswordChange = {
    _id?: string;
    password?: string; 
    confirm_password?: string;
    current_password?: string;
}

export type TUserRole = keyof typeof USER_ROLE;