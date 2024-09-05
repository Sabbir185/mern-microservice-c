/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from "mongoose"

export type TSavedAddress = {
    _id?: Types.ObjectId;
    user: Types.ObjectId;
    name: string;
    address: string;
    location: {
        lat: number;
        lng: number;
    };
}