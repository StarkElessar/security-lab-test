import { type ReactNode } from 'react';

import { Provider } from './lib/provider';
import { Root } from './ui/root';
import { Trigger } from './ui/trigger';
import { Content } from './ui/content';
import { Header } from './ui/header';
import { Footer } from './ui/footer';
import { Title } from './ui/title';
import { Description } from './ui/description';
import { Close } from './ui/close';

interface ModalProps {
	children: ReactNode;
	defaultOpen?: boolean;
}

export const Modal = ({ children, defaultOpen }: ModalProps) => {
	return (
		<Provider defaultOpen={defaultOpen}>
			<Root>{children}</Root>
		</Provider>
	);
};

export const ModalWindow = Object.assign(Modal, {
	Trigger,
	Content,
	Header,
	Title,
	Description,
	Footer,
	Close,
});
