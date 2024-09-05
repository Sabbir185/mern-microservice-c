import { clearHash } from '../../app/utils/nestedCahceQuery'
import { NextFunction, Request, Response } from "express"

const cleanCache = async (req: Request, res: Response, next: NextFunction) => {
    const {user} = res.locals;
    await next();
    await clearHash(user._id)
}

export default cleanCache;