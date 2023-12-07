'use client'
import LandingCarousel from '@/components/LandingCarousel'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
const Home = (): JSX.Element => {
	return (
		<section className='
		w-2/3 h-fit
		bg-slate-100
		my-10 rounded border border-slate-300 p-12
		flex flex-col justify-center items-center gap-8
		text-center'>
			<h1 className='text-3xl'>¡Welcome to Discount Dash!</h1>
			<Button
				variant="shadow"
				as={Link}
				href='/home'
				color="primary"
				className='
					text-lg
					border border-blue-800/50
					hover:shadow-lg hover:shadow-primary/60 transition-all duration-1000'
			>
				Browse Shop
			</Button>
			<LandingCarousel/>
		</section>
	)
}

export default Home
