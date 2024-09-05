import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { savedAddressValidations } from './saved.address.validation';
import { createSavedAddress, deleteSavedAddress, getSavedAddress, updateSavedAddress } from './saved.address.controller';
import auth from '../../middlewares/auth';
import cleanCache from '../../middlewares/cleanCache';

const router = express.Router();


router.post(
    '/create',
    auth('user'),
    validateRequest(savedAddressValidations.createSavedAddressValidationSchema),
    cleanCache,
    createSavedAddress,
);
router.patch(
    '/update',
    auth('user'),
    validateRequest(savedAddressValidations.updateSavedAddressValidationSchema),
    updateSavedAddress,
);
router.get(
    '/list',
    auth('user'),
    getSavedAddress,
);
router.delete(
    '/',
    auth('user'),
    deleteSavedAddress,
);

export const savedAddressRoutes = router;
