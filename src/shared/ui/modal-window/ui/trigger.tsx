'use client';

import { type ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import type { RenderPropsChildren } from '../types';
import { useModalWindow } from '../lib/context';

export interface TriggerProps {
	children: ReactNode | RenderPropsChildren;
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
	'aria-label'?: string;
}

export function Trigger({ children, onClick }: TriggerProps) {
	const context = useModalWindow();

	const handleClick = () => {
		context.open();
		onClick?.();
	};

	return (
		<DialogPrimitive.Trigger asChild onClick={handleClick}>
			{typeof children === 'function' ? children(context) : children}
		</DialogPrimitive.Trigger>
	);
}
