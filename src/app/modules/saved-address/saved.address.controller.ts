import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SavedAddressServices } from "./saved.address.service";

export const createSavedAddress = catchAsync(async (req, res) => {
    const { body } = req;
    const result = await SavedAddressServices.createSavedAddressIntoDB(body,res)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Address saved successfully!',
        data: result
    })
})

export const updateSavedAddress = catchAsync(async (req, res) => {
    const { body } = req;
    const result = await SavedAddressServices.updateSavedAddressIntoDB(body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Address updated successfully!',
        data: result
    })
})

export const getSavedAddress = catchAsync(async (req, res) => {
    const { query } = req;
    const result = await SavedAddressServices.getSavedAddressListFromDB(query,res)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Data retrieved successfully!',
        data: result
    })
})

export const deleteSavedAddress = catchAsync(async (req, res) => {
    const { query } = req;
    const result = await SavedAddressServices.deleteSavedAddressIntoDB(query,res)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Data deleted successfully!',
        data: result
    })
})