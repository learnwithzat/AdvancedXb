/** @format */

// components/sections/cta-section.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTASection() {
	return (
		<section
			className='py-20'
			style={{ background: 'hsl(var(--foreground))' }}>
			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='flex flex-col md:flex-row items-start md:items-center justify-between gap-8'>
					<div>
						<p
							className='text-xs font-semibold uppercase tracking-widest mb-2'
							style={{ color: 'hsl(var(--silver))' }}>
							Ready to start?
						</p>
						<h2
							className='font-heading font-extrabold tracking-tighter leading-none mb-2'
							style={{
								fontSize: 'clamp(1.6rem, 3vw, 2.75rem)',
								color: '#ffffff',
							}}>
							Transform Your Business Today
						</h2>
						<p
							className='text-sm font-light max-w-md leading-relaxed'
							style={{ color: 'rgba(255,255,255,0.4)' }}>
							Let&apos;s discuss how we can build the perfect software solution
							for your specific needs.
						</p>
					</div>

					<Link
						href='#contact'
						className='btn-ghost-light flex-none whitespace-nowrap'>
						Get Started →
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
