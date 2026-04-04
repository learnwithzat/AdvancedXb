/** @format */

// components/sections/cta-section.tsx
'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { MotionButton } from '@/components/ui/motion-button';
import {
	ArrowRight,
	Sparkles,
	CheckCircle,
	Clock,
	Shield,
	ChevronRight,
} from 'lucide-react';

const FEATURES = [
	{ text: 'No hidden fees', icon: CheckCircle },
	{ text: 'Fast delivery', icon: Clock },
	{ text: 'Secure & reliable', icon: Shield },
];

export function CTASection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
	const [isHovered, setIsHovered] = useState(false);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

	return (
		<section
			ref={sectionRef}
			className='relative py-24 lg:py-32 overflow-hidden'
			style={{ background: 'hsl(var(--foreground))' }}>
			{/* Animated Background Elements */}
			<motion.div
				className='absolute inset-0 overflow-hidden pointer-events-none'
				style={{ opacity }}>
				{/* Gradient Orbs */}
				<motion.div
					className='absolute -top-40 -right-40 w-80 h-80 rounded-full'
					style={{
						background:
							'radial-gradient(circle, rgba(192,192,192,0.1) 0%, transparent 70%)',
						scale,
					}}
					animate={{
						x: [0, 30, 0],
						y: [0, -30, 0],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>

				<motion.div
					className='absolute -bottom-40 -left-40 w-96 h-96 rounded-full'
					style={{
						background:
							'radial-gradient(circle, rgba(192,192,192,0.08) 0%, transparent 70%)',
						scale,
					}}
					animate={{
						x: [0, -40, 0],
						y: [0, 40, 0],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 1,
					}}
				/>

				{/* Grid Pattern */}
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `
							repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
							repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)
						`,
						backgroundSize: '40px 40px',
					}}
				/>

				{/* Animated Lines */}
				<motion.div
					className='absolute top-1/2 left-0 w-full h-px'
					style={{
						background:
							'linear-gradient(90deg, transparent, rgba(192,192,192,0.2), transparent)',
						scaleX: scale,
					}}
				/>
			</motion.div>

			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, ease: 'easeOut' }}
					className='relative'>
					{/* Main Content Container with Glass Effect */}
					<div className='relative rounded-sm overflow-hidden'>
						{/* Sparkle Decorations */}
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ delay: 0.3, duration: 0.5 }}
							className='absolute -top-4 -right-4 lg:top-0 lg:right-0'>
							<Sparkles
								size={24}
								style={{ color: 'hsl(var(--silver))', opacity: 0.3 }}
							/>
						</motion.div>

						<div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12'>
							{/* Left Content */}
							<div className='flex-1'>
								{/* Badge */}
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={isInView ? { opacity: 1, x: 0 } : {}}
									transition={{ delay: 0.2, duration: 0.5 }}
									className='inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-white/10 bg-white/5 backdrop-blur-sm'>
									<motion.div
										animate={{ scale: [1, 1.2, 1] }}
										transition={{ duration: 2, repeat: Infinity }}
										className='w-1.5 h-1.5 rounded-full bg-silver'
									/>
									<span className='text-[0.65rem] uppercase tracking-[0.2em] font-medium text-white/60'>
										Limited Availability
									</span>
								</motion.div>

								{/* Eyebrow */}
								<motion.p
									initial={{ opacity: 0 }}
									animate={isInView ? { opacity: 1 } : {}}
									transition={{ delay: 0.3 }}
									className='text-xs font-semibold uppercase tracking-[0.2em] mb-3'
									style={{ color: 'hsl(var(--silver))' }}>
									Ready to start?
								</motion.p>

								{/* Main Heading with Gradient */}
								<motion.h2
									initial={{ opacity: 0 }}
									animate={isInView ? { opacity: 1 } : {}}
									transition={{ delay: 0.4 }}
									className='font-heading font-bold tracking-tighter leading-[1.1] mb-4'
									style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
									Transform Your
									<span className='relative inline-block mx-2'>
										<span className='bg-gradient-to-r from-white via-silver to-white bg-clip-text text-transparent'>
											Business
										</span>
										<motion.span
											initial={{ width: 0 }}
											animate={isInView ? { width: '100%' } : {}}
											transition={{ delay: 0.8, duration: 0.8 }}
											className='absolute -bottom-1 left-0 h-px bg-gradient-to-r from-silver to-transparent'
										/>
									</span>
									<br />
									<span>Today</span>
								</motion.h2>

								{/* Description */}
								<motion.p
									initial={{ opacity: 0 }}
									animate={isInView ? { opacity: 1 } : {}}
									transition={{ delay: 0.5 }}
									className='text-sm font-light max-w-md leading-relaxed mb-6'
									style={{ color: 'rgba(255,255,255,0.5)' }}>
									Let&apos;s discuss how we can build the perfect software
									solution for your specific needs.
								</motion.p>

								{/* Features List */}
								<motion.div
									initial={{ opacity: 0 }}
									animate={isInView ? { opacity: 1 } : {}}
									transition={{ delay: 0.6 }}
									className='flex flex-wrap gap-4 mb-8'>
									{FEATURES.map((feature, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, x: -10 }}
											animate={isInView ? { opacity: 1, x: 0 } : {}}
											transition={{ delay: 0.7 + index * 0.1 }}
											className='flex items-center gap-2'>
											<feature.icon
												size={14}
												className='text-silver'
											/>
											<span className='text-xs text-white/60'>
												{feature.text}
											</span>
										</motion.div>
									))}
								</motion.div>
							</div>

							{/* Right Column - CTA Button Area */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{ delay: 0.5, duration: 0.6 }}
								className='flex-none w-full lg:w-auto'>
								{/* Main CTA Button with Hover Effects */}
								<MotionButton
									asChild
									size='lg'
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onHoverStart={() => setIsHovered(true)}
									onHoverEnd={() => setIsHovered(false)}
									className='relative group overflow-hidden px-8 py-6 uppercase tracking-widest font-heading border-white/20 min-w-[200px] bg-white/5 backdrop-blur-sm hover:text-foreground transition-colors duration-300'>
									<Link href='#contact'>
										<span className='relative z-10 flex items-center justify-center gap-2'>
											Get Started
											<motion.div
												animate={{ x: isHovered ? 5 : 0 }}
												transition={{ duration: 0.2 }}>
												<ArrowRight size={14} />
											</motion.div>
										</span>

										{/* Slide-in Background */}
										<span className='absolute inset-0 bg-gradient-to-r from-white to-silver translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out' />

										{/* Glow Effect on Hover */}
										<span className='absolute -inset-1 bg-gradient-to-r from-silver/30 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
									</Link>
								</MotionButton>

								{/* Secondary Link */}
								<MotionButton
									asChild
									variant='link'
									initial={{ opacity: 0 }}
									animate={isInView ? { opacity: 1 } : {}}
									transition={{ delay: 0.7 }}
									className='flex items-center justify-center gap-2 mt-4 text-[0.7rem] uppercase tracking-[0.15em] hover:no-underline transition-opacity hover:opacity-80'
									style={{ color: 'rgba(255,255,255,0.4)' }}>
									<Link
										href='#about'
										className='group/sub'>
										Learn more about us
										<ChevronRight
											size={12}
											className='group-hover/sub:translate-x-1 transition-transform'
										/>
									</Link>
								</MotionButton>
							</motion.div>
						</div>

						{/* Bottom Decorative Bar */}
						<motion.div
							initial={{ scaleX: 0 }}
							animate={isInView ? { scaleX: 1 } : {}}
							transition={{ delay: 1, duration: 0.8 }}
							className='absolute -bottom-3 left-0 w-full h-px bg-gradient-to-r from-transparent via-silver to-transparent'
							style={{ transformOrigin: 'left' }}
						/>
					</div>

					{/* Trust Indicators */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.8, duration: 0.5 }}
						className='flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 pt-6 border-t border-white/10'>
						<span className='text-[0.65rem] uppercase tracking-wider text-white/40'>
							Trusted by
						</span>
						<div className='flex items-center gap-4 text-white/60 text-xs font-light'>
							<span>500+ Companies</span>
							<span className='w-px h-3 bg-white/20' />
							<span>24/7 Support</span>
							<span className='w-px h-3 bg-white/20' />
							<span>98% Retention</span>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
