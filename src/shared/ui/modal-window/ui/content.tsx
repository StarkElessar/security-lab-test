'use client';

import { type ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { useModalWindow } from '../lib/context';
import { RenderPropsChildren } from '../types';

export interface ContentProps {
	children: ReactNode | RenderPropsChildren;
	showCloseIconButton?: boolean;
	className?: string;
}

export function Content(props: ContentProps) {
	const { children, showCloseIconButton = true, className, ...restProps } = props;
	const context = useModalWindow();

	return (
		<DialogPrimitive.Portal>
			<DialogPrimitive.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50" />
			<DialogPrimitive.Content
				className={cn(
					'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
					className
				)}
				{...restProps}
			>
				{typeof children === 'function' ? children(context) : children}
				{showCloseIconButton && (
					<DialogPrimitive.Close
						onClick={context.close}
						className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
					>
						<XIcon />
						<span className="sr-only">Закрыть</span>
					</DialogPrimitive.Close>
				)}
			</DialogPrimitive.Content>
		</DialogPrimitive.Portal>
	);
}
