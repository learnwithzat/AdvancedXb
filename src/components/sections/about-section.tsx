/** @format */

// components/sections/about-section.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { MotionButton } from '@/components/ui/motion-button';
import {
	ChevronRight,
	Sparkles,
	Rocket,
	Users,
	TrendingUp,
	Award,
	Code,
	Zap,
} from 'lucide-react';
const descriptionLines = [
	'ZatGo Innovation helps businesses transform ideas into powerful digital solutions.',
	'We specialize in building scalable systems that improve efficiency, automation, and growth.',
	'Our approach combines strong technical expertise with real-world business understanding — ensuring every product we build delivers measurable value.',
];
const ABOUT_ITEMS = [
	{
		num: '01',
		title: 'Our Mission',
		desc: 'Empowering businesses with smart, scalable solutions that drive efficiency and long-term growth.',
		icon: Rocket,
		color: '#ff6b6b',
	},
	{
		num: '02',
		title: 'Our Vision',
		desc: 'Becoming a global leader in software innovation and digital transformation.',
		icon: Sparkles,
		color: '#4ecdc4',
	},
	{
		num: '03',
		title: 'Our Team',
		desc: 'A passionate group of experts focused on delivering high-quality digital products at scale.',
		icon: Users,
		color: '#45b7d1',
	},
	{
		num: '04',
		title: 'Our Growth',
		desc: 'Constantly evolving with modern technologies to serve our clients better every year.',
		icon: TrendingUp,
		color: '#96ceb4',
	},
];

const STATS = [
	{ value: '10+', label: 'Projects Delivered', icon: Code },
	{ value: '98%', label: 'Client Satisfaction', icon: Award },
	{ value: '24/7', label: 'Support Available', icon: Zap },
];

export function AboutSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	};

	const numberVariants = {
		hidden: { opacity: 0, scale: 0.5 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.4, delay: 0.2 },
		},
	};

	return (
		<section
			ref={sectionRef}
			id='about'
			className='py-24 relative overflow-hidden'
			style={{ background: 'hsl(var(--background))' }}>
			{/* Animated Background Elements */}
			<motion.div
				className='absolute inset-0 overflow-hidden pointer-events-none'
				style={{ y }}>
				<div className='absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-silver/5 to-transparent rounded-full blur-3xl animate-pulse' />
				<div className='absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-silver/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000' />

				{/* Grid Pattern Overlay */}
				<div
					className='absolute inset-0 opacity-[0.02]'
					style={{
						backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 4px)`,
						backgroundSize: '100% 4px',
					}}
				/>
			</motion.div>

			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10'>
				<div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-start'>
					{/* Left Column */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.7, ease: 'easeOut' }}>
						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ delay: 0.2, duration: 0.4 }}
							className='inline-flex items-center gap-2 px-3 py-1 mb-6 border'
							style={{ borderColor: 'hsl(var(--border))' }}>
							<span className='w-1.5 h-1.5 rounded-full bg-silver animate-pulse' />
							<span
								className='text-[0.65rem] uppercase tracking-[0.2em] font-medium'
								style={{ color: 'hsl(var(--silver))' }}>
								Since 2020
							</span>
						</motion.div>

						{/* Eyebrow */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : {}}
							transition={{ delay: 0.3 }}
							className='section-eyebrow mb-3 text-xs tracking-[0.2em] uppercase'
							style={{ color: 'hsl(var(--chrome))' }}>
							Who we are
						</motion.div>

						{/* Heading with gradient text */}
						<motion.h2
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : {}}
							transition={{ delay: 0.4 }}
							className='font-heading font-bold tracking-tighter leading-[1.1] mb-6'
							style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
							Built to{' '}
							<span className='relative inline-block'>
								<span className='bg-gradient-to-r from-silver via-silver-dark to-chrome bg-clip-text text-transparent'>
									Build
								</span>
								<motion.span
									initial={{ width: 0 }}
									animate={isInView ? { width: '100%' } : {}}
									transition={{ delay: 0.8, duration: 0.8 }}
									className='absolute bottom-0 left-0 h-px bg-gradient-to-r from-silver to-transparent'
								/>
							</span>
							<br />
							<span className='mt-2 block'>What Matters</span>
						</motion.h2>

						{/* Description with animated underline */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : {}}
							transition={{ delay: 0.5 }}>
							<div className='max-w-md space-y-4'>
								{descriptionLines.map((line, index) => (
									<motion.p
										key={index}
										initial={{ opacity: 0, y: 10 }}
										animate={isInView ? { opacity: 1, y: 0 } : {}}
										transition={{ delay: 0.5 + index * 0.3, duration: 0.6 }}
										className='text-sm leading-relaxed font-light relative'
										style={{ color: 'hsl(var(--text-3))' }}>
										{line}
										{/* Optional animated underline */}
										<motion.span
											className='absolute left-0 bottom-0 h-[2px] w-full bg-blue-500 origin-left'
											initial={{ scaleX: 0 }}
											animate={isInView ? { scaleX: 1 } : {}}
											transition={{ delay: 0.7 + index * 0.3, duration: 0.5 }}
										/>
									</motion.p>
								))}
							</div>
						</motion.div>

						{/* CTA Button with hover effect */}
						<MotionButton
							asChild
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.6, duration: 0.5 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							size='lg'
							className='relative group overflow-hidden px-8 py-6 uppercase tracking-widest font-heading'>
							<Link href='#contact'>
								<span className='relative z-10 flex items-center gap-3'>
									Work With Us
									<ChevronRight
										size={14}
										className='group-hover:translate-x-1 transition-transform duration-300'
									/>
								</span>
								<span className='absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300' />
							</Link>
						</MotionButton>

						{/* Stats Section */}
						<motion.div
							variants={containerVariants}
							initial='hidden'
							animate={isInView ? 'visible' : 'hidden'}
							className='grid grid-cols-3 gap-4 mt-12 pt-8 border-t'
							style={{ borderColor: 'hsl(var(--border))' }}>
							{STATS.map((stat, index) => (
								<MotionButton
									key={index}
									variant='ghost'
									whileHover={{ y: -5 }}
									whileTap={{ scale: 0.95 }}
									asChild={false}
									className='flex flex-col h-auto p-2 text-center group cursor-pointer hover:bg-transparent'>
									<stat.icon
										size={20}
										className='mx-auto mb-2 transition-colors group-hover:text-silver'
										style={{ color: 'hsl(var(--chrome))' }}
									/>
									<motion.div
										initial={{ opacity: 0 }}
										animate={isInView ? { opacity: 1 } : {}}
										transition={{ delay: 0.8 + index * 0.1 }}
										className='text-xl font-bold mb-1'
										style={{ color: 'hsl(var(--foreground))' }}>
										{stat.value}
									</motion.div>
									<div
										className='text-[0.65rem] uppercase tracking-wider'
										style={{ color: 'hsl(var(--chrome))' }}>
										{stat.label}
									</div>
								</MotionButton>
							))}
						</motion.div>
					</motion.div>

					{/* Right Column - Numbered List with enhanced animations */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
						className='relative'>
						{/* Decorative line */}
						<div
							className='absolute left-8 top-0 bottom-0 w-px hidden lg:block'
							style={{
								background:
									'linear-gradient(to bottom, transparent, hsl(var(--border)), transparent)',
							}}
						/>

						{ABOUT_ITEMS.map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: 20 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								whileHover={{ x: 5 }}
								className='group relative'>
								<motion.div
									className='flex gap-5 items-start py-6 cursor-pointer'
									style={{
										borderBottom: '1px solid hsl(var(--border))',
										borderTop:
											i === 0 ? '1px solid hsl(var(--border))' : 'none',
										transition: 'all 0.3s ease',
									}}
									whileHover={{ borderColor: 'hsl(var(--silver))' }}>
									{/* Number with animated background */}
									<motion.div
										variants={numberVariants}
										className='relative flex-none'>
										<div
											className='w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:scale-110'
											style={{
												background: 'hsl(var(--card))',
												border: '1px solid hsl(var(--border))',
												transition: 'all 0.3s ease',
											}}>
											<span
												className='font-heading font-bold text-xs tracking-widest transition-colors duration-300 group-hover:text-silver'
												style={{ color: 'hsl(var(--chrome))' }}>
												{item.num}
											</span>
										</div>

										{/* Decorative dot */}
										<motion.div
											className='absolute -right-1 -top-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
											style={{ background: item.color }}
											initial={{ scale: 0 }}
											whileInView={{ scale: 1 }}
											transition={{ delay: i * 0.1 }}
										/>
									</motion.div>

									<div className='flex-1'>
										<div className='flex items-center gap-2 mb-2'>
											<item.icon
												size={14}
												className='opacity-0 group-hover:opacity-100 transition-all duration-300'
												style={{ color: item.color }}
											/>
											<h3
												className='font-heading font-bold text-sm tracking-tight transition-colors duration-300 group-hover:text-silver'
												style={{ color: 'hsl(var(--foreground))' }}>
												{item.title}
											</h3>
										</div>
										<p
											className='text-sm leading-relaxed font-light transition-colors duration-300'
											style={{ color: 'hsl(var(--text-3))' }}>
											{item.desc}
										</p>

										{/* Animated underline on hover */}
										<motion.div
											className='h-px bg-gradient-to-r from-silver to-transparent mt-3'
											initial={{ width: 0 }}
											whileHover={{ width: '100%' }}
											transition={{ duration: 0.3 }}
										/>
									</div>
								</motion.div>
							</motion.div>
						))}

						{/* Additional decorative element */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : {}}
							transition={{ delay: 0.8 }}
							className='mt-8 p-4 border border-dashed'
							style={{ borderColor: 'hsl(var(--border))' }}>
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-3'>
									<div className='w-8 h-8 flex items-center justify-center bg-silver/10'>
										<Award
											size={16}
											style={{ color: 'hsl(var(--silver))' }}
										/>
									</div>
									<div>
										<div
											className='text-[0.7rem] uppercase tracking-wider'
											style={{ color: 'hsl(var(--chrome))' }}>
											ISO Certified
										</div>
										<div
											className='text-xs font-light'
											style={{ color: 'hsl(var(--text-3))' }}>
											Quality Management System
										</div>
									</div>
								</div>
								<ChevronRight
									size={14}
									style={{ color: 'hsl(var(--silver))' }}
								/>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
