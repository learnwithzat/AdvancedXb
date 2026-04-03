/** @format */

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'ZatGo Innovation',
	description: 'Modern Software Solutions for Growing Businesses',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-gray-50 text-gray-900`}>
				<div className='min-h-screen flex flex-col'>
					{/* Navbar */}
					<header className='sticky top-0 z-50 bg-white border-b'>
						<div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
							<h1 className='text-xl font-bold text-blue-600'>
								ZatGo Innovation
							</h1>

							<nav className='hidden md:flex gap-6 text-sm font-medium'>
								<a
									href='#'
									className='hover:text-blue-600'>
									Home
								</a>
								<a
									href='#services'
									className='hover:text-blue-600'>
									Services
								</a>
								<a
									href='#about'
									className='hover:text-blue-600'>
									About
								</a>
								<a
									href='#contact'
									className='hover:text-blue-600'>
									Contact
								</a>
							</nav>

							<a
								href='#contact'
								className='bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700'>
								Get Quote
							</a>
						</div>
					</header>

					{/* Main */}
					<main className='flex-1'>{children}</main>

					{/* Footer */}
					<footer className='bg-white border-t mt-10'>
						<div className='max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500 flex justify-between'>
							<p>© {new Date().getFullYear()} ZatGo Innovation</p>
							<p>All rights reserved</p>
						</div>
					</footer>
				</div>
			</body>
		</html>
	);
}
