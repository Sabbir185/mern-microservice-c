import { z } from 'zod';

const createSavedAddressValidationSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: 'name must be string',
            required_error: 'name is required',
        }),
        address: z.string({
            invalid_type_error: 'address must be string',
            required_error: 'address is required',
        }),
        location: z.object({
            lat: z.number({
                invalid_type_error: 'lat must be number',
                required_error: 'lat is required',
            }),
            lng: z.number({
                invalid_type_error: 'lng must be number',
                required_error: 'lng is required',
            }),
        }),
    }),
});

const updateSavedAddressValidationSchema = z.object({
    body: z.object({
        _id: z.string({
            invalid_type_error: '_id must be string',
            required_error: '_id is required',
        }),
        name: z.string({
            invalid_type_error: 'name must be string',
            required_error: 'name is required',
        }).optional(),
        address: z.string({
            invalid_type_error: 'address must be string',
            required_error: 'address is required',
        }).optional(),
        location: z.object({
            lat: z.number({
                invalid_type_error: 'lat must be number',
                required_error: 'lat is required',
            }).optional(),
            lng: z.number({
                invalid_type_error: 'lng must be number',
                required_error: 'lng is required',
            }).optional(),
        }).optional(),
    }),
});

export const savedAddressValidations = {
    createSavedAddressValidationSchema,
    updateSavedAddressValidationSchema
};
