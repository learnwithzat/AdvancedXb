/** @format */

// app/page.tsx
'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { StatsSection } from '@/components/sections/stats-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';

export default function Home() {
	return (
		<div className='relative'>
			<HeroSection />

			{/* Divider for visual separation */}
			<div className='relative'>
				<StatsSection />
			</div>

			<ServicesSection />

			{/* Decorative divider */}
			<div className='relative overflow-hidden'>
				<AboutSection />
			</div>

			<TestimonialsSection />
			<CTASection />
			<ContactSection />
		</div>
	);
}
