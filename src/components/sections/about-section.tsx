/** @format */

// components/sections/about-section.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

const ABOUT_ITEMS = [
	{
		icon: Target,
		title: 'Our Mission',
		desc: 'Empowering businesses with smart, scalable solutions that drive efficiency and long-term growth.',
	},
	{
		icon: Lightbulb,
		title: 'Our Vision',
		desc: 'Becoming a global leader in software innovation and digital transformation.',
	},
	{
		icon: Users,
		title: 'Our Team',
		desc: 'A passionate group of experts focused on delivering high-quality digital products.',
	},
	{
		icon: TrendingUp,
		title: 'Our Growth',
		desc: 'Constantly evolving with modern technologies to serve our clients better.',
	},
];

export function AboutSection() {
	return (
		<section
			id='about'
			className='py-20'>
			<div className='container mx-auto px-6'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* LEFT CONTENT */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>
							About ZatGo Innovation
						</h2>

						<p className='text-muted-foreground text-lg mb-6 leading-relaxed'>
							ZatGo Innovation helps businesses transform ideas into powerful
							digital solutions. We specialize in building scalable systems that
							improve efficiency, automation, and growth.
						</p>

						<p className='text-muted-foreground mb-8 leading-relaxed'>
							Our approach combines strong technical expertise with real-world
							business understanding, ensuring every product we build delivers
							measurable value.
						</p>

						<a href='#contact'>
							<Button size='lg'>Work With Us</Button>
						</a>
					</motion.div>

					{/* RIGHT CARDS */}
					<div className='grid gap-5'>
						{ABOUT_ITEMS.map((item, i) => {
							const Icon = item.icon;

							return (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: i * 0.1 }}
									viewport={{ once: true }}
									className='group flex items-start gap-4 p-5 rounded-xl border bg-white/50 backdrop-blur hover:shadow-md transition-all'>
									<div className='h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition'>
										<Icon className='h-6 w-6 text-primary' />
									</div>

									<div>
										<h3 className='font-semibold mb-1'>{item.title}</h3>
										<p className='text-sm text-muted-foreground leading-relaxed'>
											{item.desc}
										</p>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
