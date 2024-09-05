import { Router } from "express";
import { savedAddressRoutes } from "../modules/saved-address/saved.address.route";
import { userRoutes } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/saved-address', 
        route: savedAddressRoutes
    },
    {
        path: '/user', 
        route: userRoutes
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;