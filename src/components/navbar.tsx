/** @format */

// components/navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'Services', href: '#services' },
	{ name: 'About', href: '#about' },
	{ name: 'Contact', href: '#contact' },
];

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 12);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
				isScrolled ?
					'bg-background/90 backdrop-blur-xl border-b border-border'
				:	'bg-transparent',
			)}>
			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between'>
				{/* Logo */}
				<Link
					href='/'
					className='font-heading font-extrabold text-xl tracking-tight'>
					<span className='text-foreground'>Zat</span>
					<span
						style={{ color: 'hsl(var(--chrome))' }}
						className='text-foreground'>
						Go
					</span>
					<span className='text-foreground'> Innovation</span>
				</Link>

				{/* Desktop nav */}
				<nav className='hidden md:flex items-center gap-8'>
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className='text-sm tracking-wide transition-colors'
							style={{ color: 'hsl(var(--text-3))' }}
							onMouseEnter={(e) =>
								((e.target as HTMLElement).style.color =
									'hsl(var(--foreground))')
							}
							onMouseLeave={(e) =>
								((e.target as HTMLElement).style.color = 'hsl(var(--text-3))')
							}>
							{item.name}
						</Link>
					))}
				</nav>

				{/* CTA */}
				<div className='hidden md:flex items-center gap-3'>
					<Link
						href='#contact'
						className='btn-sharp text-xs px-5 py-2.5'>
						Get Quote
					</Link>
				</div>

				{/* Mobile toggle */}
				<button
					className='md:hidden p-2 text-foreground'
					onClick={() => setIsMobileOpen(!isMobileOpen)}
					aria-label='Toggle menu'>
					{isMobileOpen ?
						<X size={20} />
					:	<Menu size={20} />}
				</button>
			</div>

			{/* Mobile menu */}
			{isMobileOpen && (
				<div className='md:hidden bg-background border-b border-border animate-fade-up'>
					<nav className='max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1'>
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className='py-3 text-sm border-b border-border last:border-0'
								style={{ color: 'hsl(var(--text-3))' }}
								onClick={() => setIsMobileOpen(false)}>
								{item.name}
							</Link>
						))}
						<Link
							href='#contact'
							className='btn-sharp mt-3 justify-center'
							onClick={() => setIsMobileOpen(false)}>
							Get Quote
						</Link>
					</nav>
				</div>
			)}
		</header>
	);
}
