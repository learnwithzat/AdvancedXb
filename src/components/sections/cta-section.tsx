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
	const [loading, setLoading] = useState(false);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

	// ✅ NEW: handle CTA click (demo trigger)
	const handleCTA = async () => {
		try {
			setLoading(true);

			// ⚡ You can replace this with real form data later
			const payload = {
				firstName: 'Visitor',
				lastName: 'CTA',
				email: 'no-reply@zatgo.com',
				whatsapp: '',
				service: 'General Inquiry',
				message: 'User clicked CTA section',
				provider: 'whatsapp', // 🔥 change to "email" if needed
			};

			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});

			const data = await res.json();

			// ✅ WhatsApp flow (FREE)
			if (data.type === 'whatsapp' && data.url) {
				window.open(data.url, '_blank');
			}

			// ✅ Email flow
			if (data.type === 'email') {
				console.log('Email sent successfully');
			}
		} catch (err) {
			console.error('CTA Error:', err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			ref={sectionRef}
			className='relative py-24 lg:py-32 overflow-hidden'
			style={{ background: 'hsl(var(--secondary))' }}>
			{/* Animated Background Elements */}
			<motion.div
				className='absolute inset-0 overflow-hidden pointer-events-none'
				style={{ opacity }}>
				<motion.div
					className='absolute -top-40 -right-40 w-80 h-80 rounded-full'
					style={{
						background:
							'radial-gradient(circle, hsla(var(--primary), 0.1) 0%, transparent 70%)',
						scale,
					}}
					animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
					transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
				/>

				<motion.div
					className='absolute -bottom-40 -left-40 w-96 h-96 rounded-full'
					style={{
						background:
							'radial-gradient(circle, hsla(var(--accent-pink), 0.08) 0%, transparent 70%)',
						scale,
					}}
					animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 1,
					}}
				/>

				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `
							repeating-linear-gradient(0deg, transparent, transparent 2px, hsla(var(--foreground), 0.03) 2px, hsla(var(--foreground), 0.03) 4px),
							repeating-linear-gradient(90deg, transparent, transparent 2px, hsla(var(--foreground), 0.03) 2px, hsla(var(--foreground), 0.03) 4px)
						`,
						backgroundSize: '40px 40px',
					}}
				/>

				<motion.div
					className='absolute top-1/2 left-0 w-full h-px'
					style={{
						background:
							'linear-gradient(90deg, transparent, hsla(var(--primary), 0.15), transparent)',
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
					<div className='relative rounded-sm overflow-hidden'>
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ delay: 0.3, duration: 0.5 }}
							className='absolute -top-4 -right-4 lg:top-0 lg:right-0'>
							<Sparkles
								size={24}
								style={{ color: 'hsl(var(--accent-pink))', opacity: 0.3 }}
							/>
						</motion.div>

						<div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12'>
							<div className='flex-1'>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={isInView ? { opacity: 1, x: 0 } : {}}
									transition={{ delay: 0.2, duration: 0.5 }}
									className='inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-primary/10 bg-primary/5 backdrop-blur-sm'>
									<motion.div
										animate={{ scale: [1, 1.2, 1] }}
										transition={{ duration: 2, repeat: Infinity }}
										className='w-1.5 h-1.5 rounded-full bg-accent-pink'
									/>
									<span className='text-[0.65rem] uppercase tracking-[0.2em] font-medium text-muted-foreground'>
										Limited Availability
									</span>
								</motion.div>

								<motion.p
									initial={{ opacity: 0 }}
									animate={isInView ? { opacity: 1 } : {}}
									transition={{ delay: 0.3 }}
									className='text-xs font-semibold uppercase tracking-[0.2em] mb-3'
									style={{ color: 'hsl(var(--accent-pink))' }}>
									Ready to start?
								</motion.p>

								<motion.h2
									initial={{ opacity: 0 }}
									animate={isInView ? { opacity: 1 } : {}}
									transition={{ delay: 0.4 }}
									className='font-heading font-bold tracking-tighter leading-[1.1] mb-4'
									style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
									Transform Your
									<span className='relative inline-block mx-2'>
										<span className='bg-gradient-to-r from-foreground via-accent-pink to-foreground bg-clip-text text-transparent'>
											Business
										</span>
										<motion.span
											initial={{ width: 0 }}
											animate={isInView ? { width: '100%' } : {}}
											transition={{ delay: 0.8, duration: 0.8 }}
											className='absolute -bottom-1 left-0 h-px bg-gradient-to-r from-accent-pink to-transparent'
										/>
									</span>
									<br />
									<span>Today</span>
								</motion.h2>

								<motion.p
									initial={{ opacity: 0 }}
									animate={isInView ? { opacity: 1 } : {}}
									transition={{ delay: 0.5 }}
									className='text-sm font-light max-w-md leading-relaxed mb-6'
									style={{ color: 'hsl(var(--muted-foreground))' }}>
									Let&apos;s discuss how we can build the perfect software
									solution for your specific needs.
								</motion.p>

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
												className='text-accent-pink'
											/>
											<span className='text-xs text-muted-foreground'>
												{feature.text}
											</span>
										</motion.div>
									))}
								</motion.div>
							</div>

							{/* ✅ ONLY CHANGE HERE */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{ delay: 0.5, duration: 0.6 }}
								className='flex-none w-full lg:w-auto'>
								<MotionButton
									size='lg'
									onClick={handleCTA}
									disabled={loading}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onHoverStart={() => setIsHovered(true)}
									onHoverEnd={() => setIsHovered(false)}
									className='relative group overflow-hidden px-8 py-6 uppercase tracking-widest font-heading border-primary/20 min-w-[200px] bg-primary/5 backdrop-blur-sm hover:text-primary-foreground transition-colors duration-300'>
									<span className='relative z-10 flex items-center justify-center gap-2'>
										{loading ? 'Processing...' : 'Get Started'}
										<motion.div animate={{ x: isHovered ? 5 : 0 }}>
											<ArrowRight size={14} />
										</motion.div>
									</span>

									<span className='absolute inset-0 bg-gradient-to-r from-primary to-accent-pink translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out' />
									<span className='absolute -inset-1 bg-gradient-to-r from-accent-pink/30 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
								</MotionButton>

								<MotionButton
									asChild
									variant='link'
									initial={{ opacity: 0 }}
									animate={isInView ? { opacity: 1 } : {}}
									transition={{ delay: 0.7 }}
									className='flex items-center justify-center gap-2 mt-4 text-[0.7rem] uppercase tracking-[0.15em] hover:no-underline transition-opacity hover:opacity-80'
									style={{ color: 'hsl(var(--muted-foreground))' }}>
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
					</div>
				</motion.div>
			</div>
		</section>
	);
}
