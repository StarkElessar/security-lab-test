'use client';

import { type ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/shared/lib/utils';

export interface DescriptionProps {
	children: ReactNode;
	className?: string;
}

export function Description({ className, children, ...props }: DescriptionProps) {
	return (
		<DialogPrimitive.Description className={cn('text-muted-foreground text-sm', className)} {...props}>
			{children}
		</DialogPrimitive.Description>
	);
}
