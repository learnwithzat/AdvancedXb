/** @format */

// components/navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'Services', href: '#services' },
	{ name: 'About', href: '#about' },
	{ name: 'Contact', href: '#contact' },
];

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={cn(
				'fixed top-0 z-50 w-full transition-all duration-300',
				isScrolled ?
					'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b'
				:	'bg-transparent',
			)}>
			<div className='container flex h-16 items-center justify-between'>
				<Link
					href='/'
					className='flex items-center space-x-2'>
					<span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent'>
						ZatGo
					</span>
					<span className='text-2xl font-bold'>Innovation</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center gap-6'>
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className='text-sm font-medium transition-colors hover:text-primary'>
							{item.name}
						</Link>
					))}
					<ThemeToggle />
					<Button asChild>
						<Link href='#contact'>Get Quote</Link>
					</Button>
				</nav>

				{/* Mobile Navigation */}
				<div className='flex items-center gap-2 md:hidden'>
					<ThemeToggle />
					<Button
						variant='ghost'
						size='icon'
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						{isMobileMenuOpen ?
							<X />
						:	<Menu />}
					</Button>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className='absolute top-16 left-0 right-0 bg-background border-b shadow-lg md:hidden animate-in slide-in-from-top-5'>
						<nav className='container flex flex-col py-4 gap-3'>
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className='text-sm font-medium transition-colors hover:text-primary py-2'
									onClick={() => setIsMobileMenuOpen(false)}>
									{item.name}
								</Link>
							))}
							<Button
								asChild
								className='mt-2'>
								<Link
									href='#contact'
									onClick={() => setIsMobileMenuOpen(false)}>
									Get Quote
								</Link>
							</Button>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
