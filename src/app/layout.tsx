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
			<body
				className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
				<div className='min-h-screen flex flex-col'>
					{/* Navbar */}
					<header className='sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm'>
						<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
							<h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent'>
								ZatGo Innovation
							</h1>

							<nav className='hidden md:flex gap-8 text-sm font-medium'>
								<a
									href='#'
									className='transition-colors hover:text-blue-600 focus:text-blue-600 focus:outline-none'>
									Home
								</a>
								<a
									href='#services'
									className='transition-colors hover:text-blue-600 focus:text-blue-600 focus:outline-none'>
									Services
								</a>
								<a
									href='#about'
									className='transition-colors hover:text-blue-600 focus:text-blue-600 focus:outline-none'>
									About
								</a>
								<a
									href='#contact'
									className='transition-colors hover:text-blue-600 focus:text-blue-600 focus:outline-none'>
									Contact
								</a>
							</nav>

							<a
								href='#contact'
								className='bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:bg-blue-700 hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'>
								Get Quote
							</a>
						</div>
					</header>

					{/* Main */}
					<main className='flex-1'>{children}</main>

					{/* Footer */}
					<footer className='bg-white border-t mt-auto'>
						<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12'>
							<div className='flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500'>
								<p>
									© {new Date().getFullYear()} ZatGo Innovation. All rights
									reserved.
								</p>
								<div className='flex gap-6'>
									<a
										href='#'
										className='hover:text-blue-600 transition-colors'>
										Privacy Policy
									</a>
									<a
										href='#'
										className='hover:text-blue-600 transition-colors'>
										Terms of Service
									</a>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</body>
		</html>
	);
}
