'use client';

import { useId, type ComponentProps } from 'react';
import { cn } from '@/shared/lib/utils';
import { FormItemContext } from './lib';

export function FormItem({ className, ...props }: ComponentProps<'div'>) {
	const id = useId();

	return (
		<FormItemContext.Provider value={{ id }}>
			<div data-slot="form-item" className={cn('grid gap-2', className)} {...props} />
		</FormItemContext.Provider>
	);
}
