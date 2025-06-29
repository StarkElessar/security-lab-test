'use client';

import { type ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/shared/lib/utils';

export interface TitleProps {
	children: ReactNode;
	className?: string;
}

export function Title({ className, children, ...props }: TitleProps) {
	return (
		<DialogPrimitive.Title className={cn('text-lg leading-none font-semibold', className)} {...props}>
			{children}
		</DialogPrimitive.Title>
	);
}
