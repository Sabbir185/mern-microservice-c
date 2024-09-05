import { z } from "zod";

const userCreateValidationSchema = z.object({
    body: z.object({
        name: z
            .string({
                invalid_type_error: 'User name must be string',
                required_error: 'User name is required'
            })
            .max(50, { message: 'Name must be less than or equal to 50 characters' }),
        phone: z
            .string({
                invalid_type_error: 'Phone must be string',
                required_error: 'Phone is required'
            }).optional(),
        email: z
            .string({
                invalid_type_error: 'User email must be string',
                required_error: 'User email is required'
            })
            .email({
                message: "Invalid email address"
            }).optional(),
        password: z
            .string({
                invalid_type_error: 'User password must be string',
                required_error: 'User password is required'
            })
            .min(6, { message: 'Password must be greater than or equal to 6 characters' }),
        role: z.
            enum(['user', 'driver', 'admin', 'assistant', 'employee'], {
                invalid_type_error: "User role must be string",
                required_error: "User role is required"
            }),
        gender: z.
            enum(['male', 'female', "other"], {
                invalid_type_error: "User gender must be string",
                required_error: "User gender must be male, female or other"
            }),
        otp: z
            .string({
                invalid_type_error: 'OTP must be string',
                required_error: 'OTP is required'
            }),
    })
})

const updateUserValidationSchema = z.object({
    body: z.object({
        name: z
            .string({
                invalid_type_error: 'User name must be string',
                required_error: 'User name is required'
            })
            .max(50, { message: 'Name must be less than or equal to 50 characters' }).optional(),
        phone: z
            .string({
                invalid_type_error: 'Phone must be string',
                required_error: 'Phone is required'
            }),
        image: z
            .string({
                invalid_type_error: 'Image must be string',
                required_error: 'Image is required'
            }).optional(),
        email: z
            .string({
                invalid_type_error: 'User email must be string',
                required_error: 'User email is required'
            })
            .email({
                message: "Invalid email address"
            }).optional(),
        password: z
            .string({
                invalid_type_error: 'User password must be string',
                required_error: 'User password is required'
            })
            .min(6, { message: 'Password must be greater than or equal to 6 characters' }).optional(),
        role: z.
            enum(['user', 'driver', 'admin', 'assistant'], {
                invalid_type_error: "User role must be string",
                required_error: "User role is required"
            }).optional(),
        gender: z.
            enum(['male', 'female'], {
                invalid_type_error: "User gender must be string",
                required_error: "User gender must be male or female"
            }),
        otp: z
            .string({
                invalid_type_error: 'OTP must be string',
                required_error: 'OTP is required'
            }).optional(),
        identityNumber: z.string({
            invalid_type_error: 'Identity number must be string',
            required_error: 'Identity number is required'
        }).optional(),
        driving_license: z.string({
            invalid_type_error: 'driving_license must be string',
            required_error: 'driving_license is required'
        }).optional(),
        personal_id_card: z.object({
            front: z.string({
                invalid_type_error: 'Id card front page must be string',
                required_error: 'Id card front page is required'
            }).optional(),
            back: z.string({
                invalid_type_error: 'Id card back page must be string',
                required_error: 'Id card back page is required'
            }).optional(),
        }).optional(),
        address: z.string({
            invalid_type_error: 'address must be string',
            required_error: 'address is required'
        }).optional(),
    })
})

const updateUserByCompanyValidationSchema = z.object({
    body: z.object({
        _id: z.string({
            invalid_type_error: '_id must be string',
            required_error: '_id number is required'
        }),
        name: z
            .string({
                invalid_type_error: 'User name must be string',
                required_error: 'User name is required'
            })
            .max(50, { message: 'Name must be less than or equal to 50 characters' }).optional(),
        phone: z
            .string({
                invalid_type_error: 'Phone must be string',
                required_error: 'Phone is required'
            }),
        image: z
            .string({
                invalid_type_error: 'Image must be string',
                required_error: 'Image is required'
            }).optional(),
        email: z
            .string({
                invalid_type_error: 'User email must be string',
                required_error: 'User email is required'
            })
            .email({
                message: "Invalid email address"
            }).optional(),
        password: z
            .string({
                invalid_type_error: 'User password must be string',
                required_error: 'User password is required'
            })
            .min(6, { message: 'Password must be greater than or equal to 6 characters' }).optional(),
        role: z.
            enum(['user', 'driver', 'admin', 'assistant'], {
                invalid_type_error: "User role must be string",
                required_error: "User role is required"
            }).optional(),
        gender: z.
            enum(['male', 'female'], {
                invalid_type_error: "User gender must be string",
                required_error: "User gender must be male or female"
            }),
        otp: z
            .string({
                invalid_type_error: 'OTP must be string',
                required_error: 'OTP is required'
            }).optional(),
        identityNumber: z.string({
            invalid_type_error: 'Identity number must be string',
            required_error: 'Identity number is required'
        }).optional(),
        driving_license: z.string({
            invalid_type_error: 'driving_license must be string',
            required_error: 'driving_license is required'
        }).optional(),
        personal_id_card: z.object({
            front: z.string({
                invalid_type_error: 'Id card front page must be string',
                required_error: 'Id card front page is required'
            }).optional(),
            back: z.string({
                invalid_type_error: 'Id card back page must be string',
                required_error: 'Id card back page is required'
            }).optional(),
        }).optional(),
        address: z.string({
            invalid_type_error: 'address must be string',
            required_error: 'address is required'
        }).optional(),
    })
})

const updateDriverValidationSchema = z.object({
    body: z.object({
        name: z
            .string({
                invalid_type_error: 'User name must be string',
                required_error: 'User name is required'
            })
            .max(50, { message: 'Name must be less than or equal to 50 characters' }).optional(),
        phone: z
            .string({
                invalid_type_error: 'Phone must be string',
                required_error: 'Phone is required'
            }),
        image: z
            .string({
                invalid_type_error: 'Image must be string',
                required_error: 'Image is required'
            }).optional(),
        email: z
            .string({
                invalid_type_error: 'User email must be string',
                required_error: 'User email is required'
            })
            .email({
                message: "Invalid email address"
            }),
        password: z
            .string({
                invalid_type_error: 'User password must be string',
                required_error: 'User password is required'
            })
            .min(6, { message: 'Password must be greater than or equal to 6 characters' }).optional(),
        role: z.
            enum(['user', 'driver', 'admin', 'assistant'], {
                invalid_type_error: "User role must be string",
                required_error: "User role is required"
            }).optional(),
        gender: z.
            enum(['male', 'female', "other"], {
                invalid_type_error: "User gender must be string",
                required_error: "User gender must be male, female or other"
            }),
        otp: z
            .string({
                invalid_type_error: 'OTP must be string',
                required_error: 'OTP is required'
            }).optional(),
        identityNumber: z.string({
            invalid_type_error: 'Identity number must be string',
            required_error: 'Identity number is required'
        }),
        driving_license: z.string({
            invalid_type_error: 'driving_license must be string',
            required_error: 'driving_license is required'
        }),
        personal_id_card: z.object({
            front: z.string({
                invalid_type_error: 'Id card front page must be string',
                required_error: 'Id card front page is required'
            }),
            back: z.string({
                invalid_type_error: 'Id card back page must be string',
                required_error: 'Id card back page is required'
            }),
        }),
        address: z.string({
            invalid_type_error: 'address must be string',
            required_error: 'address is required'
        }),
        date_of_birth: z.string({
            invalid_type_error: 'Date of birth must be string',
            required_error: 'Date of birth is required'
        }),
        date_of_birth_hijri: z.string({
            invalid_type_error: 'Date of birth hijri must be string',
            required_error: 'Date of birth hijri is required'
        }).optional(),
    })
})

const updateDriverValidationByCompanySchema = z.object({
    body: z.object({
        _id: z.string({
            invalid_type_error: '_id must be string',
            required_error: '_id number is required'
        }),
        name: z
            .string({
                invalid_type_error: 'User name must be string',
                required_error: 'User name is required'
            })
            .max(50, { message: 'Name must be less than or equal to 50 characters' }).optional(),
        phone: z
            .string({
                invalid_type_error: 'Phone must be string',
                required_error: 'Phone is required'
            }),
        image: z
            .string({
                invalid_type_error: 'Image must be string',
                required_error: 'Image is required'
            }).optional(),
        email: z
            .string({
                invalid_type_error: 'User email must be string',
                required_error: 'User email is required'
            })
            .email({
                message: "Invalid email address"
            }),
        password: z
            .string({
                invalid_type_error: 'User password must be string',
                required_error: 'User password is required'
            })
            .min(6, { message: 'Password must be greater than or equal to 6 characters' }).optional(),
        role: z.
            enum(['user', 'driver', 'admin', 'assistant'], {
                invalid_type_error: "User role must be string",
                required_error: "User role is required"
            }).optional(),
        gender: z.
            enum(['male', 'female', "other"], {
                invalid_type_error: "User gender must be string",
                required_error: "User gender must be male, female or other"
            }),
        otp: z
            .string({
                invalid_type_error: 'OTP must be string',
                required_error: 'OTP is required'
            }).optional(),
        identityNumber: z.string({
            invalid_type_error: 'Identity number must be string',
            required_error: 'Identity number is required'
        }),
        driving_license: z.string({
            invalid_type_error: 'driving_license must be string',
            required_error: 'driving_license is required'
        }),
        personal_id_card: z.object({
            front: z.string({
                invalid_type_error: 'Id card front page must be string',
                required_error: 'Id card front page is required'
            }),
            back: z.string({
                invalid_type_error: 'Id card back page must be string',
                required_error: 'Id card back page is required'
            }),
        }),
        address: z.string({
            invalid_type_error: 'address must be string',
            required_error: 'address is required'
        }),
        date_of_birth: z.string({
            invalid_type_error: 'Date of birth must be string',
            required_error: 'Date of birth is required'
        }),
        date_of_birth_hijri: z.string({
            invalid_type_error: 'Date of birth hijri must be string',
            required_error: 'Date of birth hijri is required'
        }).optional(),
    })
})

const changeUserPasswordValidationSchema = z.object({
    body: z.object({
        current_password: z
            .string({
                invalid_type_error: 'Current password must be string',
                required_error: 'Current password is required'
            })
            .min(6, { message: 'Current password must be greater than or equal to 6 characters' }),
        password: z
            .string({
                invalid_type_error: 'Password must be string',
                required_error: 'Password is required'
            })
            .min(6, { message: 'Password must be greater than or equal to 6 characters' }),
        confirm_password: z
            .string({
                invalid_type_error: 'Confirm password must be string',
                required_error: 'Confirm password is required'
            })
            .min(6, { message: 'Confirm password must be greater than or equal to 6 characters' }),
    })
})


export const UserValidations = {
    userCreateValidationSchema,
    updateUserValidationSchema,
    updateDriverValidationSchema,
    updateDriverValidationByCompanySchema,
    changeUserPasswordValidationSchema,
    updateUserByCompanyValidationSchema
}