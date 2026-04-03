/** @format */

import './globals.css';
import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const syne = Syne({
	subsets: ['latin'],
	weight: ['400', '700', '800'],
	variable: '--font-syne',
	display: 'swap',
});

const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500'],
	variable: '--font-dm-sans',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'ZatGo Innovation — Smart Software for Modern Businesses',
	description:
		'We design and develop modern, scalable software solutions — POS systems, ERP platforms, mobile apps, and SaaS products.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={`${syne.variable} ${dmSans.variable}`}>
			<body className='min-h-screen flex flex-col bg-background text-foreground antialiased'>
				<Navbar />
				<main className='flex-1'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
