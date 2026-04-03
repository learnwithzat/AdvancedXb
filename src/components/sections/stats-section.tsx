/** @format */

// components/sections/stats-section.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const STATS = [
	{ value: '500+', label: 'Happy Clients' },
	{ value: '120+', label: 'Projects Completed' },
	{ value: '25', label: 'Countries Served' },
	{ value: '15', label: 'Awards Won' },
];

export function StatsSection() {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

	return (
		<section
			ref={ref}
			style={{ background: 'hsl(var(--foreground))' }}>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-2 md:grid-cols-4'>
					{STATS.map((stat, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 12 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							className='px-8 py-9 text-center md:text-left'
							style={{
								borderRight:
									i < STATS.length - 1 ?
										'1px solid rgba(255,255,255,0.08)'
									:	'none',
							}}>
							<div
								className='font-heading font-extrabold tracking-tighter leading-none mb-1'
								style={{
									fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
									color: '#ffffff',
								}}>
								{stat.value}
							</div>
							<div
								className='text-xs uppercase tracking-widest'
								style={{ color: 'rgba(255,255,255,0.35)' }}>
								{stat.label}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
