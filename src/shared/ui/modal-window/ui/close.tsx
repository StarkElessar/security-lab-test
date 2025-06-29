'use client';

import { type ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useModalWindow } from '../lib/context';

export interface CloseProps {
	children?: ReactNode;
	className?: string;
}

export function Close({ children, ...props }: CloseProps) {
	const { close } = useModalWindow();

	return (
		<DialogPrimitive.Close onClick={close} {...props}>
			{children}
		</DialogPrimitive.Close>
	);
}
