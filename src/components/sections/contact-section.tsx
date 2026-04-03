/** @format */

// components/sections/contact-section.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactSection() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState<Record<string, string>>({});

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		if (!formData.name.trim() || formData.name.length < 2) {
			newErrors.name = 'Name must be at least 2 characters';
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email.trim() || !emailRegex.test(formData.email)) {
			newErrors.email = 'Invalid email address';
		}

		if (!formData.message.trim() || formData.message.length < 10) {
			newErrors.message = 'Message must be at least 10 characters';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: '' }));
		}
	};

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		if (!validateForm()) {
			toast.error('Please fix the form errors');
			return;
		}

		setIsSubmitting(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		toast.success('Message sent successfully!', {
			description: "We'll get back to you within 24 hours.",
		});

		setFormData({ name: '', email: '', message: '' });
		setIsSubmitting(false);
	}

	return (
		<section
			id='contact'
			className='py-20 bg-muted/30'>
			<div className='container'>
				<div className='text-center max-w-3xl mx-auto mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>Contact Us</h2>
					<p className='text-muted-foreground text-lg'>
						Get in touch with our team. We'd love to hear from you.
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-12'>
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}>
						<Card>
							<CardContent className='p-6 space-y-6'>
								<div className='flex items-start gap-4'>
									<div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
										<Mail className='h-5 w-5 text-primary' />
									</div>
									<div>
										<h3 className='font-semibold mb-1'>Email Us</h3>
										<p className='text-sm text-muted-foreground'>
											hello@zatgo.com
										</p>
										<p className='text-sm text-muted-foreground'>
											support@zatgo.com
										</p>
									</div>
								</div>

								<div className='flex items-start gap-4'>
									<div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
										<Phone className='h-5 w-5 text-primary' />
									</div>
									<div>
										<h3 className='font-semibold mb-1'>Call Us</h3>
										<p className='text-sm text-muted-foreground'>
											+1 (555) 123-4567
										</p>
										<p className='text-sm text-muted-foreground'>
											Mon-Fri, 9AM-6PM
										</p>
									</div>
								</div>

								<div className='flex items-start gap-4'>
									<div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
										<MapPin className='h-5 w-5 text-primary' />
									</div>
									<div>
										<h3 className='font-semibold mb-1'>Visit Us</h3>
										<p className='text-sm text-muted-foreground'>
											123 Innovation Street
											<br />
											San Francisco, CA 94105
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}>
						<Card>
							<CardContent className='p-6'>
								<form
									onSubmit={handleSubmit}
									className='space-y-6'>
									<div className='space-y-2'>
										<Label htmlFor='name'>Name</Label>
										<Input
											id='name'
											name='name'
											value={formData.name}
											onChange={handleChange}
											placeholder='Your name'
											className={errors.name ? 'border-red-500' : ''}
										/>
										{errors.name && (
											<p className='text-sm text-red-500'>{errors.name}</p>
										)}
									</div>

									<div className='space-y-2'>
										<Label htmlFor='email'>Email</Label>
										<Input
											id='email'
											name='email'
											type='email'
											value={formData.email}
											onChange={handleChange}
											placeholder='you@example.com'
											className={errors.email ? 'border-red-500' : ''}
										/>
										{errors.email && (
											<p className='text-sm text-red-500'>{errors.email}</p>
										)}
									</div>

									<div className='space-y-2'>
										<Label htmlFor='message'>Message</Label>
										<Textarea
											id='message'
											name='message'
											value={formData.message}
											onChange={handleChange}
											placeholder='Tell us about your project...'
											className={`min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
										/>
										{errors.message && (
											<p className='text-sm text-red-500'>{errors.message}</p>
										)}
									</div>

									<Button
										type='submit'
										className='w-full'
										disabled={isSubmitting}>
										{isSubmitting ?
											'Sending...'
										:	<>
												Send Message
												<Send className='ml-2 h-4 w-4' />
											</>
										}
									</Button>
								</form>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
