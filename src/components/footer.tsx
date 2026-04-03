/** @format */
'use client';
// components/footer.tsx
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const NAV_LINKS = ['Home', 'Services', 'About', 'Contact'];
const SERVICE_LINKS = [
	'Web Development',
	'POS & ERP',
	'Mobile Apps',
	'Cloud Solutions',
];
const LEGAL_LINKS = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

const SOCIALS = [
	{ label: 'f', href: '#' },
	{ label: 't', href: '#' },
	{ label: 'in', href: '#' },
	{ label: 'yt', href: '#' },
];

const linkStyle: React.CSSProperties = {
	fontSize: '0.825rem',
	fontWeight: 300,
	color: 'hsl(var(--text-3))',
	textDecoration: 'none',
	transition: 'color 0.2s',
};

export function Footer() {
	return (
		<footer
			style={{
				background: 'hsl(var(--secondary))',
				borderTop: '1px solid hsl(var(--border))',
			}}>
			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-14 pb-8'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-10 mb-12'>
					{/* Brand */}
					<div className='col-span-2 md:col-span-1'>
						<div
							className='font-heading font-extrabold text-lg tracking-tight mb-2'
							style={{ color: 'hsl(var(--foreground))' }}>
							Zat<span style={{ color: 'hsl(var(--chrome))' }}>Go</span>{' '}
							Innovation
						</div>
						<p
							className='text-xs leading-relaxed font-light'
							style={{ color: 'hsl(var(--text-3))' }}>
							Building smart software solutions for modern businesses worldwide.
						</p>

						<div className='mt-5 space-y-2'>
							{[
								{ icon: Mail, val: 'hello@zatgo.com' },
								{ icon: Phone, val: '+1 (555) 123-4567' },
								{ icon: MapPin, val: 'San Francisco, CA' },
							].map(({ icon: Icon, val }) => (
								<div
									key={val}
									className='flex items-center gap-2'
									style={{ color: 'hsl(var(--text-3))' }}>
									<Icon size={11} />
									<span className='text-xs font-light'>{val}</span>
								</div>
							))}
						</div>
					</div>

					{/* Nav */}
					<div>
						<div
							className='text-xs font-semibold uppercase tracking-widest mb-4'
							style={{ color: 'hsl(var(--silver))' }}>
							Navigation
						</div>
						<ul className='space-y-2.5'>
							{NAV_LINKS.map((name) => (
								<li key={name}>
									<Link
										href={`#${name.toLowerCase()}`}
										style={linkStyle}
										className='hover:text-foreground transition-colors'>
										{name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<div
							className='text-xs font-semibold uppercase tracking-widest mb-4'
							style={{ color: 'hsl(var(--silver))' }}>
							Services
						</div>
						<ul className='space-y-2.5'>
							{SERVICE_LINKS.map((name) => (
								<li key={name}>
									<Link
										href='#services'
										style={linkStyle}
										className='hover:text-foreground transition-colors'>
										{name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Legal */}
					<div>
						<div
							className='text-xs font-semibold uppercase tracking-widest mb-4'
							style={{ color: 'hsl(var(--silver))' }}>
							Legal
						</div>
						<ul className='space-y-2.5'>
							{LEGAL_LINKS.map((name) => (
								<li key={name}>
									<Link
										href='#'
										style={linkStyle}
										className='hover:text-foreground transition-colors'>
										{name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div
					className='flex flex-col sm:flex-row items-center justify-between gap-4 pt-6'
					style={{ borderTop: '1px solid hsl(var(--border))' }}>
					<p
						className='text-xs font-light'
						style={{ color: 'hsl(var(--text-3))' }}>
						© {new Date().getFullYear()} ZatGo Innovation. All rights reserved.
					</p>

					<div className='flex gap-2'>
						{SOCIALS.map(({ label, href }) => (
							<Link
								key={label}
								href={href}
								className='w-8 h-8 flex items-center justify-center text-xs font-bold border transition-all'
								style={{
									borderColor: 'hsl(var(--border))',
									color: 'hsl(var(--text-3))',
								}}
								onMouseEnter={(e) => {
									(e.currentTarget as HTMLElement).style.background =
										'hsl(var(--foreground))';
									(e.currentTarget as HTMLElement).style.color =
										'hsl(var(--background))';
									(e.currentTarget as HTMLElement).style.borderColor =
										'hsl(var(--foreground))';
								}}
								onMouseLeave={(e) => {
									(e.currentTarget as HTMLElement).style.background =
										'transparent';
									(e.currentTarget as HTMLElement).style.color =
										'hsl(var(--text-3))';
									(e.currentTarget as HTMLElement).style.borderColor =
										'hsl(var(--border))';
								}}>
								{label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
