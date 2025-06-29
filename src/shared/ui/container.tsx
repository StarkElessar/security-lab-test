import { type ReactNode } from 'react';
import { cn } from '../lib/utils';

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
	return <div className={cn('max-w-7xl px-5 mx-auto', className)}>{children}</div>;
};
