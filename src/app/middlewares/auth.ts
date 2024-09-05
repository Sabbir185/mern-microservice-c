/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express"
import { catchAsync } from "../utils/catchAsync"
import AppError from "../errors/AppError";
import httpStatus from "http-status";
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from "../config";
import { User } from "../modules/user/user.model";


const auth = (...requiredRules: any) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(httpStatus.UNAUTHORIZED).json(
                {
                    success: false,
                    message: "Unauthorized Access",
                    errorMessage: "You do not have the necessary permissions to access this resource.",
                    errorDetails: null,
                    stack: null
                }
            )
        }

        let decoded;
        try {
          decoded = jwt.verify(token as string, config.jwt_access_secret as string) as JwtPayload;
        } catch (err) {
            return res.status(httpStatus.UNAUTHORIZED).json(
                {
                    success: false,
                    message: "Unauthorized Access",
                    errorMessage: "Unauthorized Access",
                    errorDetails: null,
                    stack: null
                }
            )
        }

        if (!decoded?._id) {
            return res.status(httpStatus.UNAUTHORIZED).json(
                {
                    success: false,
                    message: "Unauthorized Access",
                    errorMessage: "You do not have the necessary permissions to access this resource.",
                    errorDetails: null,
                    stack: null
                }
            )
        }

        const user = await User.findById(decoded?._id).lean();

        res.locals.user = user;

        next();
    })
}

export default auth;