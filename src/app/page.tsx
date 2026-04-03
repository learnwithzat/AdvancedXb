/** @format */

export default function HomePage() {
	return (
		<div className='max-w-7xl mx-auto px-6'>
			{/* HERO */}
			<section className='py-20 text-center'>
				<h1 className='text-4xl md:text-5xl font-bold leading-tight'>
					Build Smart Software with
					<span className='text-blue-600'> ZatGo Innovation</span>
				</h1>

				<p className='mt-6 text-gray-600 max-w-2xl mx-auto'>
					We design and develop modern, scalable software solutions including
					POS systems, ERP platforms, mobile apps, and SaaS products.
				</p>

				<div className='mt-8 flex justify-center gap-4'>
					<a
						href='#services'
						className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'>
						Our Services
					</a>
					<a
						href='#contact'
						className='border px-6 py-3 rounded-lg hover:bg-gray-100'>
						Contact Us
					</a>
				</div>
			</section>

			{/* SERVICES */}
			<section
				id='services'
				className='py-16'>
				<h2 className='text-2xl font-semibold text-center mb-10'>
					Our Services
				</h2>

				<div className='grid md:grid-cols-3 gap-6'>
					{[
						{
							title: 'Web Development',
							desc: 'Next.js, React, scalable and fast web apps.',
						},
						{
							title: 'POS & ERP Systems',
							desc: 'Custom business software with full control.',
						},
						{
							title: 'Mobile Apps',
							desc: 'React Native apps with real-time sync.',
						},
					].map((item, i) => (
						<div
							key={i}
							className='bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition'>
							<h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
							<p className='text-gray-600 text-sm'>{item.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* ABOUT */}
			<section
				id='about'
				className='py-16 text-center'>
				<h2 className='text-2xl font-semibold mb-6'>About ZatGo Innovation</h2>

				<p className='max-w-3xl mx-auto text-gray-600'>
					ZatGo Innovation is a modern software service company focused on
					building efficient, scalable, and user-friendly applications. We help
					businesses digitize operations with custom-built solutions tailored to
					their needs.
				</p>
			</section>

			{/* CONTACT */}
			<section
				id='contact'
				className='py-16'>
				<h2 className='text-2xl font-semibold text-center mb-8'>Contact Us</h2>

				<div className='max-w-xl mx-auto bg-white p-6 rounded-2xl border shadow-sm'>
					<form className='space-y-4'>
						<input
							type='text'
							placeholder='Your Name'
							className='w-full border px-4 py-2 rounded-lg'
						/>

						<input
							type='email'
							placeholder='Email Address'
							className='w-full border px-4 py-2 rounded-lg'
						/>

						<textarea
							placeholder='Your Message'
							rows={4}
							className='w-full border px-4 py-2 rounded-lg'
						/>

						<button
							type='submit'
							className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700'>
							Send Message
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
