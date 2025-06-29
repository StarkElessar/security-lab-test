'use client';

import { type ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

export interface HeaderProps {
	children: ReactNode;
	className?: string;
}

export function Header({ className, children, ...props }: HeaderProps) {
	return (
		<div className={cn('flex flex-col gap-2 text-center sm:text-left', className)} {...props}>
			{children}
		</div>
	);
}
