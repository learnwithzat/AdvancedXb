/** @format */

// components/sections/contact-section.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import { MotionButton } from '@/components/ui/motion-button';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CONTACT_INFO = [
	{
		icon: Mail,
		label: 'Email',
		value: 'team.zatgoinnovation@gmail.com',
		href: 'team.zatgoinnovation@gmail.com',
	},
	{
		icon: FaWhatsapp,
		label: 'WhatsApp',
		value: '+966 55 124 5307',
		href: 'tel:+966551245307',
	},
	{ icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' },
];

const SERVICES_LIST = [
	'Web Development',
	'POS Application',
	'Mobile App Development',
	'Cloud Solutions',
	'SaaS Product',
];

export function ContactSection() {
	const [sent, setSent] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSource, setSubmitSource] = useState<'email' | 'whatsapp' | null>(
		null,
	);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		whatsapp: '',
		service: '',
		message: '',
	});
	const [focused, setFocused] = useState<string | null>(null);
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!submitSource) return;

		setIsSubmitting(true);
		try {
			// Updated to port 5000 to match the NestJS backend main.ts
			const response = await fetch(
				'https://advancedx.onrender.com:5000/contact',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ ...formData, provider: submitSource }),
				},
			);

			if (!response.ok) throw new Error('Failed to send');

			setSent(true);
			toast.success(
				submitSource === 'whatsapp' ?
					'WhatsApp notification sent!'
				:	'Email sent successfully!',
			);
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
				whatsapp: '',
				service: '',
				message: '',
			});
			setTimeout(() => setSent(false), 3000);
		} catch (error) {
			toast.error('Something went wrong. Please try again.');
		} finally {
			setIsSubmitting(false);
			setSubmitSource(null);
		}
	};

	const labelStyle: React.CSSProperties = {
		display: 'block',
		fontSize: '0.7rem',
		letterSpacing: '0.15em',
		textTransform: 'uppercase',
		color: focused ? 'hsl(var(--silver))' : 'hsl(var(--silver-dark))',
		marginBottom: '0.5rem',
		fontWeight: 500,
		transition: 'color 0.2s ease',
	};

	const floatingLabelStyle = (value: string): React.CSSProperties => ({
		position: 'absolute',
		left: '1rem',
		top: value ? '0.6rem' : '0.85rem',
		fontSize: value ? '0.65rem' : '0.875rem',
		color: focused ? 'hsl(var(--silver))' : 'hsl(var(--silver-dark))',
		pointerEvents: 'none',
		transition: 'all 0.2s ease',
		backgroundColor: 'hsl(var(--card))',
		padding: '0 0.25rem',
		transform: value ? 'translateY(-0.5rem)' : 'none',
	});

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
		}),
	};

	return (
		<section
			ref={sectionRef}
			id='contact'
			className='py-24 relative overflow-hidden'
			style={{ background: 'hsl(var(--background))' }}>
			{/* Background decoration */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-silver/5 to-transparent blur-3xl' />
				<div className='absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-silver/5 to-transparent blur-3xl' />
			</div>

			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10'>
				<div className='grid lg:grid-cols-2 gap-16 lg:gap-20'>
					{/* Left Column */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, ease: 'easeOut' }}>
						<div className='relative inline-block mb-4'>
							<div
								className='section-eyebrow text-xs tracking-[0.2em] uppercase font-medium mb-2'
								style={{ color: 'hsl(var(--silver))' }}>
								Let&apos;s talk
							</div>
							<div className='absolute -bottom-1 left-0 w-12 h-px bg-gradient-to-r from-silver to-transparent' />
						</div>

						<h2
							className='font-heading font-bold tracking-tighter leading-[1.1] mb-6'
							style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
							Start Your
							<span className='block mt-2 bg-gradient-to-r from-foreground to-silver bg-clip-text text-transparent'>
								Project
							</span>
						</h2>

						<p
							className='text-sm leading-relaxed font-light mb-10 max-w-md'
							style={{ color: 'hsl(var(--text-3))' }}>
							We&apos;d love to hear about your project. Tell us what
							you&apos;re building and we&ll get back to you within 24 hours.
						</p>

						<div className='space-y-6 mb-12'>
							{CONTACT_INFO.map(({ icon: Icon, label, value, href }, index) => (
								<motion.a
									key={label}
									href={href}
									custom={index}
									variants={itemVariants}
									initial='hidden'
									animate={isInView ? 'visible' : 'hidden'}
									className='flex items-start gap-4 group cursor-pointer'
									whileHover={{ x: 5 }}
									transition={{ type: 'spring', stiffness: 300 }}>
									<div
										className='w-10 h-10 flex items-center justify-center border transition-all duration-300 group-hover:border-silver group-hover:scale-110'
										style={{
											borderColor: 'hsl(var(--border))',
											color: 'hsl(var(--silver))',
											background: 'hsl(var(--card))',
										}}>
										<Icon
											size={16}
											strokeWidth={1.5}
										/>
									</div>
									<div>
										<div
											className='text-[0.7rem] uppercase tracking-[0.15em] mb-1 transition-colors group-hover:text-silver'
											style={{ color: 'hsl(var(--chrome))' }}>
											{label}
										</div>
										<div
											className='text-sm font-light transition-colors group-hover:text-silver'
											style={{ color: 'hsl(var(--foreground))' }}>
											{value}
										</div>
									</div>
								</motion.a>
							))}
						</div>

						{/* Trust Badge */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : {}}
							transition={{ delay: 0.4, duration: 0.5 }}
							className='pt-8 border-t'
							style={{ borderColor: 'hsl(var(--border))' }}>
							<div className='flex items-center gap-2 text-[0.7rem] uppercase tracking-wider'>
								<CheckCircle
									size={14}
									style={{ color: 'hsl(var(--silver))' }}
								/>
								<span style={{ color: 'hsl(var(--chrome))' }}>
									Trusted by 500+ clients worldwide
								</span>
							</div>
						</motion.div>
					</motion.div>

					{/* Right Column - Form */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}>
						<form
							onSubmit={handleSubmit}
							className='relative'>
							<div className='absolute -inset-1 bg-gradient-to-r from-silver/10 via-transparent to-silver/10 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

							<div
								className='relative bg-card/30 backdrop-blur-sm p-6 sm:p-8 border'
								style={{ borderColor: 'hsl(var(--border))' }}>
								<div className='grid grid-cols-2 gap-4 mb-5'>
									<div className='relative'>
										<Input
											type='text'
											name='firstName'
											value={formData.firstName}
											onChange={handleInputChange}
											onFocus={() => setFocused('firstName')}
											onBlur={() => setFocused(null)}
											className='rounded-none bg-card'
										/>
										<div style={floatingLabelStyle(formData.firstName)}>
											First Name
										</div>
									</div>
									<div className='relative'>
										<Input
											type='text'
											name='lastName'
											value={formData.lastName}
											onChange={handleInputChange}
											onFocus={() => setFocused('lastName')}
											onBlur={() => setFocused(null)}
											className='rounded-none bg-card'
										/>
										<div style={floatingLabelStyle(formData.lastName)}>
											Last Name
										</div>
									</div>
								</div>

								<div className='relative mb-5'>
									<Input
										type='email'
										name='email'
										value={formData.email}
										onChange={handleInputChange}
										onFocus={() => setFocused('email')}
										onBlur={() => setFocused(null)}
										className='rounded-none bg-card'
										required
									/>
									<div style={floatingLabelStyle(formData.email)}>
										Email Address *
									</div>
								</div>

								<div className='relative mb-5'>
									<select
										name='service'
										value={formData.service}
										onChange={handleInputChange}
										onFocus={() => setFocused('service')}
										onBlur={() => setFocused(null)}
										style={{
											appearance: 'none',
											cursor: 'pointer',
										}}
										className='w-full flex h-10 border border-input bg-card px-3 py-2 text-sm rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>
										<option
											value=''
											disabled>
											Select a service
										</option>
										{SERVICES_LIST.map((s) => (
											<option
												key={s}
												value={s}>
												{s}
											</option>
										))}
									</select>
									<div style={floatingLabelStyle(formData.service)}>
										Service Needed
									</div>
									<div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
										<ArrowRight
											size={14}
											style={{ color: 'hsl(var(--silver-dark))' }}
										/>
									</div>
								</div>

								<div className='relative mb-7'>
									<Textarea
										name='message'
										value={formData.message}
										onChange={handleInputChange}
										onFocus={() => setFocused('message')}
										onBlur={() => setFocused(null)}
										className='rounded-none bg-card min-h-[120px]'
									/>
									<div style={floatingLabelStyle(formData.message)}>
										Your Message
									</div>
								</div>

								<AnimatePresence mode='wait'>
									<div className='w-full flex items-center justify-center'>
										<MotionButton
											// Made key unique to the email provider
											key={sent ? 'sent-email' : 'send-email'}
											type='submit'
											asChild={false}
											size='lg'
											loading={isSubmitting && submitSource === 'email'}
											onClick={() => setSubmitSource('email')}
											whileHover={!sent ? { scale: 1.02 } : {}}
											whileTap={!sent ? { scale: 0.98 } : {}}
											className='relative w-full py-6 uppercase tracking-[0.15em] font-heading'
											style={{
												background:
													sent ? 'hsl(var(--silver))' : (
														'hsl(var(--foreground))'
													),
												color: 'hsl(var(--background))',
												border: 'none',
												cursor: sent ? 'default' : 'pointer',
											}}
											disabled={sent}>
											<div>
												<span className='relative z-10 flex items-center justify-center gap-2'>
													{sent ?
														<>
															<CheckCircle size={14} />
															Message Sent
														</>
													:	<>
															Send to Mail
															<FaMailBulk
																size={12}
																className='group-hover:translate-x-1 transition-transform'
															/>
														</>
													}
												</span>
											</div>

											{!sent && (
												<motion.div
													className='absolute inset-0 bg-gradient-to-r from-silver to-silver-dark'
													initial={{ x: '-100%' }}
													whileHover={{ x: 0 }}
													transition={{ duration: 0.3 }}
													style={{ opacity: 0.15 }}
												/>
											)}
										</MotionButton>

										<MotionButton
											// Made key unique to the whatsapp provider
											key={sent ? 'sent-whatsapp' : 'send-whatsapp'}
											type='submit'
											asChild={false}
											size='lg'
											loading={isSubmitting && submitSource === 'whatsapp'}
											onClick={() => setSubmitSource('whatsapp')}
											whileHover={!sent ? { scale: 1.02 } : {}}
											whileTap={!sent ? { scale: 0.98 } : {}}
											className='relative w-full py-6 uppercase tracking-[0.15em] font-heading'
											style={{
												background:
													sent ? 'hsl(var(--silver))' : (
														'hsl(var(--foreground))'
													),
												color: 'hsl(var(--background))',
												border: 'none',
												cursor: sent ? 'default' : 'pointer',
											}}
											disabled={sent}>
											<div>
												<span className='relative z-10 flex items-center justify-center gap-2'>
													{sent ?
														<>
															<CheckCircle size={14} />
															Message Sent
														</>
													:	<>
															Send to WhatsApp
															<FaWhatsapp
																size={12}
																className='group-hover:translate-x-1 transition-transform'
															/>
														</>
													}
												</span>
											</div>

											{!sent && (
												<motion.div
													className='absolute inset-0 bg-gradient-to-r from-silver to-silver-dark'
													initial={{ x: '-100%' }}
													whileHover={{ x: 0 }}
													transition={{ duration: 0.3 }}
													style={{ opacity: 0.15 }}
												/>
											)}
										</MotionButton>
									</div>
								</AnimatePresence>

								{/* Form hint */}
								<p
									className='text-[0.65rem] text-center mt-4'
									style={{ color: 'hsl(var(--chrome))' }}>
									We&apos;ll never share your information with third parties
								</p>
							</div>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
