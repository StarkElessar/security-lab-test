'use client';

import { useContext } from 'react';
import { FormFieldContext, FormItemContext } from './contexts';

export const useFormFieldContext = () => {
	const context = useContext(FormFieldContext);
	if (!context) {
		throw new Error('useFormFieldContext must be used within FormField');
	}
	return context;
};

export const useFormItemContext = () => {
	const context = useContext(FormItemContext);
	if (!context) {
		throw new Error('useFormItemContext must be used within FormItem');
	}
	return context;
};
