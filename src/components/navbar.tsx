/** @format */

// components/navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MotionButton } from '@/components/ui/motion-button';

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
					<MotionButton
						asChild
						variant='default'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className='text-xs px-6 py-2.5 font-heading uppercase tracking-widest'>
						<Link href='#contact'>Get Quote</Link>
					</MotionButton>
				</div>

				{/* Mobile toggle */}
				<MotionButton
					variant='ghost'
					className='md:hidden p-2'
					onClick={() => setIsMobileOpen(!isMobileOpen)}
					aria-label='Toggle menu'>
					{isMobileOpen ?
						<X size={20} />
					:	<Menu size={20} />}
				</MotionButton>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{isMobileOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className='md:hidden bg-background border-b border-border overflow-hidden'>
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
							<MotionButton
								asChild
								variant='default'
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className='mt-3 w-full font-heading uppercase tracking-widest py-6'
								onClick={() => setIsMobileOpen(false)}>
								<Link href='#contact'>Get Quote</Link>
							</MotionButton>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
