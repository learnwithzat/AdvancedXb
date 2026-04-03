/** @format */

// components/sections/testimonials-section.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
	{
		initials: 'SJ',
		name: 'Sarah Johnson',
		role: 'CEO, TechStart Inc.',
		quote:
			'ZatGo transformed our business with their custom ERP solution. Our efficiency has increased by 40% — it has been a complete game changer for our operations.',
	},
	{
		initials: 'MC',
		name: 'Michael Chen',
		role: 'CTO, InnovateCorp',
		quote:
			"The team's expertise in mobile development helped us launch our app ahead of schedule and under budget. Incredibly professional from start to finish.",
	},
	{
		initials: 'ER',
		name: 'Emily Rodriguez',
		role: 'Operations Director, RetailPro',
		quote:
			'Our POS system has never worked better. The support team is always responsive and deeply knowledgeable. We could not ask for a better partner.',
	},
	{
		initials: 'DK',
		name: 'Daniel Kim',
		role: 'Founder, ScaleUp Labs',
		quote:
			'From concept to deployment in 3 weeks. The engineering quality is top-tier and the communication was seamless throughout the entire project.',
	},
];

export function TestimonialsSection() {
	const [current, setCurrent] = useState(0);

	const prev = () =>
		setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
	const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

	const t = TESTIMONIALS[current];

	return (
		<section
			id='testimonials'
			className='py-24'
			style={{ background: 'hsl(var(--secondary))' }}>
			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
				{/* Header */}
				<div className='flex items-end justify-between mb-10 flex-wrap gap-4'>
					<div>
						<div className='section-eyebrow mb-3'>Client stories</div>
						<h2
							className='font-heading font-extrabold tracking-tighter leading-none'
							style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
							What Our Clients Say
						</h2>
					</div>
					<div className='flex gap-2'>
						<button
							onClick={prev}
							className='w-10 h-10 flex items-center justify-center border transition-all'
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
							}}
							aria-label='Previous'>
							<ChevronLeft size={16} />
						</button>
						<button
							onClick={next}
							className='w-10 h-10 flex items-center justify-center border transition-all'
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
							}}
							aria-label='Next'>
							<ChevronRight size={16} />
						</button>
					</div>
				</div>

				{/* Card */}
				<AnimatePresence mode='wait'>
					<motion.div
						key={current}
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -30 }}
						transition={{ duration: 0.35 }}
						className='chrome-card p-8 md:p-10 max-w-2xl'>
						{/* Stars */}
						<div
							className='text-sm tracking-widest mb-5'
							style={{ color: 'hsl(var(--silver))' }}>
							★★★★★
						</div>

						{/* Quote */}
						<p
							className='text-base leading-relaxed font-light italic mb-7'
							style={{ color: 'hsl(var(--text-2))' }}>
							&ldquo;{t.quote}&rdquo;
						</p>

						{/* Author */}
						<div className='flex items-center gap-3'>
							<div
								className='w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border flex-none'
								style={{
									background: 'hsl(var(--accent))',
									borderColor: 'hsl(var(--border))',
									color: 'hsl(var(--silver-dark))',
								}}>
								{t.initials}
							</div>
							<div>
								<div
									className='font-heading font-bold text-sm'
									style={{ color: 'hsl(var(--foreground))' }}>
									{t.name}
								</div>
								<div
									className='text-xs'
									style={{ color: 'hsl(var(--text-3))' }}>
									{t.role}
								</div>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>

				{/* Dots */}
				<div className='flex gap-1.5 mt-6'>
					{TESTIMONIALS.map((_, i) => (
						<button
							key={i}
							onClick={() => setCurrent(i)}
							className='h-1 transition-all'
							style={{
								width: i === current ? '20px' : '6px',
								background:
									i === current ?
										'hsl(var(--silver-dark))'
									:	'hsl(var(--border))',
							}}
							aria-label={`Go to testimonial ${i + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
