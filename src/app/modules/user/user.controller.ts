import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

export const createUser = catchAsync(async (req, res) => {
    const { body } = req;
    const result = await UserServices.userCreateIntoDB(body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User created successfully!',
        data: result
    })
})