import { type ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useModalWindow } from '../lib/context';

export const Root = ({ children }: { children: ReactNode }) => {
	const { isOpen, toggle } = useModalWindow();

	return (
		<DialogPrimitive.Root open={isOpen} onOpenChange={toggle}>
			{children}
		</DialogPrimitive.Root>
	);
};
