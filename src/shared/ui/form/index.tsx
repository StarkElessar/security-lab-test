'use client';

import { type ReactNode } from 'react';
import { FormProvider, type UseFormReturn, type FieldValues } from 'react-hook-form';

import { FormField } from './form-field';
import { FormItem } from './form-item';
import { FormLabel } from './form-label';
import { FormControl } from './form-control';
import { FormDescription } from './form-description';
import { FormMessage } from './form-message';

interface FormProps<TFieldValues extends FieldValues> {
	form: UseFormReturn<TFieldValues>;
	children: ReactNode;
}

const FormRoot = <TFieldValues extends FieldValues>({ form, children }: FormProps<TFieldValues>) => {
	return <FormProvider {...form}>{children}</FormProvider>;
};

export const Form = Object.assign(FormRoot, {
	Field: FormField,
	Item: FormItem,
	Label: FormLabel,
	Control: FormControl,
	Description: FormDescription,
	Message: FormMessage,
});
