import React from 'react'
import { View } from 'react-native'
import { z } from 'zod';

export const validationSchemaText = z.object({
    singleLineText: z.string().min(1,"This field is required"),
    multiLineText: z.string().min(10,'This field is required'),
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    url:z.string()
    .refine((value) => /^(https?):\/\//i.test(value), {
      message: 'Please enter a valid URL',
    }),
    search: z.string().min(1,'Search field cannot be empty'),
    phoneNumber:  z.string().min(10,'Please enter correcr number'),
    number: z.number().min(1, 'Please enter a valid number'),
    date: z.string().date('Enter correct date'),
    time: z.string().time(),
    dateTime: z.string().datetime(),
    range: z.number().gte(10).lte(100, 'Range must be between 0 and 100'),
});


