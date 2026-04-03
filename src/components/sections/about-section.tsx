/** @format */

// components/sections/about-section.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ABOUT_ITEMS = [
	{
		num: '01',
		title: 'Our Mission',
		desc: 'Empowering businesses with smart, scalable solutions that drive efficiency and long-term growth.',
	},
	{
		num: '02',
		title: 'Our Vision',
		desc: 'Becoming a global leader in software innovation and digital transformation.',
	},
	{
		num: '03',
		title: 'Our Team',
		desc: 'A passionate group of experts focused on delivering high-quality digital products at scale.',
	},
	{
		num: '04',
		title: 'Our Growth',
		desc: 'Constantly evolving with modern technologies to serve our clients better every year.',
	},
];

export function AboutSection() {
	return (
		<section
			id='about'
			className='py-24'
			style={{ background: 'hsl(var(--background))' }}>
			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					{/* Left */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}>
						<div className='section-eyebrow mb-3'>Who we are</div>
						<h2
							className='font-heading font-extrabold tracking-tighter leading-none mb-6'
							style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
							Built to Build
							<br />
							What Matters
						</h2>

						<p
							className='text-sm leading-relaxed font-light mb-4'
							style={{ color: 'hsl(var(--text-3))' }}>
							ZatGo Innovation helps businesses transform ideas into powerful
							digital solutions. We specialize in building scalable systems that
							improve efficiency, automation, and growth.
						</p>
						<p
							className='text-sm leading-relaxed font-light mb-8'
							style={{ color: 'hsl(var(--text-3))' }}>
							Our approach combines strong technical expertise with real-world
							business understanding — ensuring every product we build delivers
							measurable value.
						</p>

						<Link
							href='#contact'
							className='btn-sharp'>
							Work With Us →
						</Link>
					</motion.div>

					{/* Right — numbered list */}
					<div>
						{ABOUT_ITEMS.map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: 16 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.45, delay: i * 0.08 }}
								viewport={{ once: true }}
								className='flex gap-5 items-start py-5'
								style={{
									borderBottom: '1px solid hsl(var(--border))',
									borderTop: i === 0 ? '1px solid hsl(var(--border))' : 'none',
								}}>
								<span
									className='font-heading font-bold text-xs tracking-widest pt-0.5 flex-none'
									style={{ color: 'hsl(var(--border))' }}>
									{item.num}
								</span>
								<div>
									<h3
										className='font-heading font-bold text-sm mb-1 tracking-tight'
										style={{ color: 'hsl(var(--foreground))' }}>
										{item.title}
									</h3>
									<p
										className='text-sm leading-relaxed font-light'
										style={{ color: 'hsl(var(--text-3))' }}>
										{item.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
