/** @format */

// components/sections/contact-section.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const CONTACT_INFO = [
	{ icon: Mail, label: 'Email', value: 'hello@zatgo.com' },
	{ icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
	{ icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
];

const SERVICES_LIST = [
	'Web Development',
	'POS / ERP System',
	'Mobile App',
	'Cloud Solutions',
	'SaaS Product',
];

export function ContactSection() {
	const [sent, setSent] = useState(false);

	const inputStyle: React.CSSProperties = {
		width: '100%',
		background: 'hsl(var(--card))',
		border: '1px solid hsl(var(--border))',
		color: 'hsl(var(--foreground))',
		padding: '0.65rem 0.875rem',
		fontSize: '0.875rem',
		fontFamily: 'var(--font-dm-sans)',
		fontWeight: 300,
		outline: 'none',
		borderRadius: 0,
		transition: 'border-color 0.2s',
	};

	const labelStyle: React.CSSProperties = {
		display: 'block',
		fontSize: '0.65rem',
		letterSpacing: '0.1em',
		textTransform: 'uppercase' as const,
		color: 'hsl(var(--silver-dark))',
		marginBottom: '0.4rem',
		fontWeight: 500,
	};

	return (
		<section
			id='contact'
			className='py-24'
			style={{ background: 'hsl(var(--background))' }}>
			<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
				<div className='grid lg:grid-cols-2 gap-16'>
					{/* Left */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}>
						<div className='section-eyebrow mb-3'>Let&apos;s talk</div>
						<h2
							className='font-heading font-extrabold tracking-tighter leading-none mb-5'
							style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
							Start Your Project
						</h2>
						<p
							className='text-sm leading-relaxed font-light mb-8'
							style={{ color: 'hsl(var(--text-3))' }}>
							We&apos;d love to hear about your project. Tell us what
							you&apos;re building and we&apos;ll get back to you within 24
							hours.
						</p>

						{CONTACT_INFO.map(({ icon: Icon, label, value }) => (
							<div
								key={label}
								className='flex items-start gap-4 mb-5'>
								<div
									className='w-9 h-9 flex items-center justify-center border flex-none'
									style={{
										borderColor: 'hsl(var(--border))',
										color: 'hsl(var(--silver-dark))',
									}}>
									<Icon size={14} />
								</div>
								<div>
									<div
										className='text-xs uppercase tracking-widest mb-0.5'
										style={{ color: 'hsl(var(--chrome))' }}>
										{label}
									</div>
									<div
										className='text-sm'
										style={{ color: 'hsl(var(--foreground))' }}>
										{value}
									</div>
								</div>
							</div>
						))}
					</motion.div>

					{/* Right — Form */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}>
						<div className='grid grid-cols-2 gap-3 mb-3'>
							<div>
								<label style={labelStyle}>First Name</label>
								<input
									type='text'
									placeholder='John'
									style={inputStyle}
									onFocus={(e) =>
										((e.target as HTMLElement).style.borderColor =
											'hsl(var(--silver-dark))')
									}
									onBlur={(e) =>
										((e.target as HTMLElement).style.borderColor =
											'hsl(var(--border))')
									}
								/>
							</div>
							<div>
								<label style={labelStyle}>Last Name</label>
								<input
									type='text'
									placeholder='Doe'
									style={inputStyle}
									onFocus={(e) =>
										((e.target as HTMLElement).style.borderColor =
											'hsl(var(--silver-dark))')
									}
									onBlur={(e) =>
										((e.target as HTMLElement).style.borderColor =
											'hsl(var(--border))')
									}
								/>
							</div>
						</div>

						<div className='mb-3'>
							<label style={labelStyle}>Email</label>
							<input
								type='email'
								placeholder='john@company.com'
								style={inputStyle}
								onFocus={(e) =>
									((e.target as HTMLElement).style.borderColor =
										'hsl(var(--silver-dark))')
								}
								onBlur={(e) =>
									((e.target as HTMLElement).style.borderColor =
										'hsl(var(--border))')
								}
							/>
						</div>

						<div className='mb-3'>
							<label style={labelStyle}>Service Needed</label>
							<select
								style={inputStyle}
								onFocus={(e) =>
									((e.target as HTMLElement).style.borderColor =
										'hsl(var(--silver-dark))')
								}
								onBlur={(e) =>
									((e.target as HTMLElement).style.borderColor =
										'hsl(var(--border))')
								}>
								<option
									value=''
									disabled>
									Select a service
								</option>
								{SERVICES_LIST.map((s) => (
									<option key={s}>{s}</option>
								))}
							</select>
						</div>

						<div className='mb-5'>
							<label style={labelStyle}>Message</label>
							<textarea
								placeholder='Tell us about your project...'
								style={{ ...inputStyle, height: '110px', resize: 'vertical' }}
								onFocus={(e) =>
									((e.target as HTMLElement).style.borderColor =
										'hsl(var(--silver-dark))')
								}
								onBlur={(e) =>
									((e.target as HTMLElement).style.borderColor =
										'hsl(var(--border))')
								}
							/>
						</div>

						<button
							className='btn-sharp w-full justify-center py-3.5 text-xs'
							onClick={() => setSent(true)}
							disabled={sent}
							style={{ opacity: sent ? 0.6 : 1 }}>
							{sent ? 'Message Sent ✓' : 'Send Message →'}
						</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
