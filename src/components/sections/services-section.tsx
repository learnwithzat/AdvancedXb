/** @format */

// components/sections/services-section.tsx
'use client';

import { motion } from 'framer-motion';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Code2, Database, Smartphone, Cloud, Shield, Zap } from 'lucide-react';

const services = [
	{
		icon: Code2,
		title: 'Web Development',
		description:
			'Modern, scalable web applications built with Next.js, React, and cutting-edge technologies.',
		features: ['Responsive Design', 'SEO Optimized', 'Fast Performance'],
	},
	{
		icon: Database,
		title: 'POS & ERP Systems',
		description:
			'Custom business software solutions with complete control and real-time analytics.',
		features: ['Inventory Management', 'Sales Tracking', 'Reporting'],
	},
	{
		icon: Smartphone,
		title: 'Mobile Apps',
		description:
			'Cross-platform mobile applications with native performance and real-time sync.',
		features: ['iOS & Android', 'Offline Support', 'Push Notifications'],
	},
	{
		icon: Cloud,
		title: 'Cloud Solutions',
		description:
			'Scalable cloud infrastructure and deployment strategies for modern applications.',
		features: ['AWS/Azure', 'Auto-scaling', '99.9% Uptime'],
	},
	{
		icon: Shield,
		title: 'Security & Compliance',
		description:
			'Enterprise-grade security measures and compliance with industry standards.',
		features: ['Data Encryption', 'GDPR Compliant', 'Regular Audits'],
	},
	{
		icon: Zap,
		title: 'SaaS Products',
		description:
			'End-to-end SaaS development from concept to deployment and beyond.',
		features: ['Subscription Mgmt', 'Analytics', 'API Integration'],
	},
];

export function ServicesSection() {
	return (
		<section
			id='services'
			className='py-20 bg-muted/30'>
			<div className='container'>
				<div className='text-center max-w-3xl mx-auto mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Services</h2>
					<p className='text-muted-foreground text-lg'>
						Comprehensive software solutions tailored to your business needs
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}>
							<Card className='h-full hover:shadow-lg transition-shadow duration-300'>
								<CardHeader>
									<div className='h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
										<service.icon className='h-6 w-6 text-primary' />
									</div>
									<CardTitle>{service.title}</CardTitle>
									<CardDescription>{service.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className='space-y-2'>
										{service.features.map((feature, idx) => (
											<li
												key={idx}
												className='text-sm text-muted-foreground flex items-center gap-2'>
												<div className='h-1.5 w-1.5 rounded-full bg-primary' />
												{feature}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
