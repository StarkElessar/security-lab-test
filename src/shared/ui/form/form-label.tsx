'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from '@/shared/lib/utils';
import { Label } from '@/shared/ui/label';
import { useFormField } from './lib/use-form-field';

export function FormLabel({ className, ...props }: LabelPrimitive.LabelProps) {
	const { error, formItemId } = useFormField();

	return (
		<Label
			data-slot="form-label"
			data-error={!!error}
			className={cn('data-[error=true]:text-destructive', className)}
			htmlFor={formItemId}
			{...props}
		/>
	);
}
