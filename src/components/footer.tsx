/** @format */

// components/footer.tsx
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
export function Footer() {
	return (
		<footer className='bg-muted/50 border-t'>
			<div className='container py-12'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div>
						<h3 className='text-2xl font-bold mb-4'>
							ZatGo<span className='text-primary'>Innovation</span>
						</h3>
						<p className='text-sm text-muted-foreground'>
							Building smart software solutions for modern businesses.
						</p>
					</div>

					<div>
						<h4 className='font-semibold mb-4'>Quick Links</h4>
						<ul className='space-y-2 text-sm text-muted-foreground'>
							<li>
								<Link
									href='#home'
									className='hover:text-primary'>
									Home
								</Link>
							</li>
							<li>
								<Link
									href='#services'
									className='hover:text-primary'>
									Services
								</Link>
							</li>
							<li>
								<Link
									href='#about'
									className='hover:text-primary'>
									About
								</Link>
							</li>
							<li>
								<Link
									href='#contact'
									className='hover:text-primary'>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='font-semibold mb-4'>Contact Info</h4>
						<ul className='space-y-2 text-sm text-muted-foreground'>
							<li className='flex items-center gap-2'>
								<Mail className='h-4 w-4' />
								<span>hello@zatgo.com</span>
							</li>
							<li className='flex items-center gap-2'>
								<Phone className='h-4 w-4' />
								<span>+1 (555) 123-4567</span>
							</li>
							<li className='flex items-center gap-2'>
								<MapPin className='h-4 w-4' />
								<span>San Francisco, CA</span>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='font-semibold mb-4'>Follow Us</h4>
						<div className='flex gap-4'>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'>
								<FaFacebook className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'>
								<FaTwitter className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'>
								<FaLinkedin className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'>
								<FaYoutube className='h-5 w-5' />
							</Link>
						</div>
					</div>
				</div>

				<div className='border-t mt-8 pt-8 text-center text-sm text-muted-foreground'>
					<p>
						© {new Date().getFullYear()} ZatGo Innovation. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
