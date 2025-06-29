import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Container } from '@/shared/ui/container';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Security Lab Test',
	description: 'Next.js / Shadcn / Tailwind CSS / ReactHookForm / Zod / FSD',
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className="flex flex-col h-full">
					<header className="py-5 border-b border-gray-200">
						<Container>Header</Container>
					</header>
					<div className="grow-1">{children}</div>
					<footer className="py-10 bg-gray-800">
						<Container>Footer</Container>
					</footer>
				</div>
			</body>
		</html>
	);
}
