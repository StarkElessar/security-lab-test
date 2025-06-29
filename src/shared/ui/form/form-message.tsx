'use client';

import { type ComponentProps } from 'react';
import { cn } from '@/shared/lib/utils';
import { useFormField } from './lib/use-form-field';

export function FormMessage({ className, children, ...props }: ComponentProps<'p'>) {
	const { error, formMessageId } = useFormField();
	const body = error ? String(error.message ?? '') : children;

	if (!body) {
		return null;
	}

	return (
		<p data-slot="form-message" id={formMessageId} className={cn('text-destructive text-sm', className)} {...props}>
			{body}
		</p>
	);
}
