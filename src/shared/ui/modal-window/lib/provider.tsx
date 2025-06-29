import { useState, type ReactNode } from 'react';
import { Context } from './context';

interface ProviderProps {
	children: ReactNode;
	defaultOpen?: boolean;
}

export const Provider = ({ children, defaultOpen = false }: ProviderProps) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);
	const toggle = (isOpen: boolean) => setIsOpen(isOpen);

	return <Context.Provider value={{ isOpen, toggle, close, open }}>{children}</Context.Provider>;
};
