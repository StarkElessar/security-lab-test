'use client';

import { type ComponentProps } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { useFormField } from './lib/use-form-field';

export function FormControl({ ...props }: ComponentProps<typeof Slot>) {
	const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

	return (
		<Slot
			data-slot="form-control"
			id={formItemId}
			aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
			aria-invalid={!!error}
			{...props}
		/>
	);
}
