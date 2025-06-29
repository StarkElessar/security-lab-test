import { createContext, use } from 'react';

export interface ModalWindowContext {
	isOpen: boolean;
	toggle: (isOpen: boolean) => void;
	close: () => void;
	open: () => void;
}

export const Context = createContext<ModalWindowContext | null>(null);

export const useModalWindow = () => {
	const context = use(Context);

	if (!context) {
		throw new Error('useModalWindow must be used within a ModalWindowProvider');
	}

	return context;
};
