/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            toLowerCase: true,
            trim: true,
        },
    },
    {
        timestamps: true
    }
);

export const User: any = model('user', userSchema);