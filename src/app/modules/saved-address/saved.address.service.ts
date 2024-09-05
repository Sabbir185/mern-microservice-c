import { Response } from "express";
import { TSavedAddress } from "./saved.address.interface";
import SavedAddress from "./saved.address.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import redisClient from '../../../redisClient'
// import { clearHash } from '../../../app/utils/nestedCahceQuery'

const createSavedAddressIntoDB = async (payload: TSavedAddress, res: Response) => {
    const {user} = res.locals;
    const savedAddress = await SavedAddress.create({...payload, user: user?._id}, );
    // await clearHash(user?._id)
    return savedAddress;
};

const updateSavedAddressIntoDB = async (payload: TSavedAddress) => {
    const savedAddress = await SavedAddress.findByIdAndUpdate(
        payload._id, 
        {...payload}, 
        {new: true}
    );
    return savedAddress;
};



const getSavedAddressListFromDB = async (query: Record<string, unknown>,res: Response) => {
    const {user} = res.locals;
    if(query?._id){
        const savedAddress = await SavedAddress.findById(query?._id);
        return savedAddress;
    }
    // const savedAddress = await SavedAddress.find({user: user?._id}).cache();  // single key-value
    const savedAddress = await SavedAddress.find({user: user?._id}).cache({key: user._id});
    return savedAddress;
};



const getSavedAddressListFromDBManuallyCached = async (query: Record<string, unknown>,res: Response) => {
    const {user} = res.locals;
    if(query?._id){
        const savedAddress = await SavedAddress.findById(query?._id);
        return savedAddress;
    }

    // await redisClient.del("address")
    const addresses = await redisClient.get("address")
    const home = await redisClient.hGet("home", "one")

    console.log("Cached data: ", addresses)
    console.log("home cached data: ", home)

    // if(addresses) {
    //     return JSON.parse(addresses);
    // }
    // if(home) {
    //     return JSON.parse(home);
    // }

    console.log("DB calling")
    const savedAddress = await SavedAddress.find({user: user?._id}).lean();

    // single key-pair
    // await redisClient.set("address", JSON.stringify(savedAddress), { EX: 60 })

    // nested key-pair
    await redisClient.hSet("home", "one", JSON.stringify(savedAddress))

    return savedAddress;
};




const deleteSavedAddressIntoDB = async (query: Record<string, unknown>,res: Response) => {
    const {user} = res.locals;
    const find = await SavedAddress.findOne({_id: query?._id, user: user?._id}).lean();
    if(!find) {
        throw new AppError(
            httpStatus.NOT_FOUND,
            'Request failed',
            'Saved Address not found!',
        );
    }
    await SavedAddress.deleteOne({_id: query?._id, user: user?._id}).lean();
};


export const SavedAddressServices = {
    createSavedAddressIntoDB,
    updateSavedAddressIntoDB,
    getSavedAddressListFromDB,
    deleteSavedAddressIntoDB,
    getSavedAddressListFromDBManuallyCached
}