/** @format */

// app/page.tsx
'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { ServicesSection } from '@/components/sections/services-section';
import { AboutSection } from '@/components/sections/about-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
	return (
		<div className='relative'>
			<HeroSection />
			<StatsSection />
			<ServicesSection />
			<AboutSection />
			<TestimonialsSection />
			<CTASection />
			<ContactSection />
		</div>
	);
}
