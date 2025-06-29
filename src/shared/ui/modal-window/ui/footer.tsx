'use client';

import { type ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

export interface FooterProps {
	children: ReactNode;
	className?: string;
}

export function Footer({ className, children, ...props }: FooterProps) {
	return (
		<div className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)} {...props}>
			{children}
		</div>
	);
}
