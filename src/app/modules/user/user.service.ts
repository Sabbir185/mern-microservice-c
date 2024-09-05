/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "./user.model";
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config';

export const createToken = (payload: any, secret: string, expiresIn: string) => {
    return jwt.sign(payload, secret, {expiresIn})
}
export const verifyToken = (token: string, secret: string) => {
    return jwt.verify(token, secret) as JwtPayload
}


const userCreateIntoDB = async (payload: any,) => {
    const user = await User.create({...payload}, );
    const tokenPayload = {
        _id: user._id,
        email: user.email,
        name: user.name
    }
    const accessToken = createToken(
        tokenPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string
    )
    return {user, accessToken};
};



export const UserServices = {
    userCreateIntoDB,
}