'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const LandingCarousel = (): JSX.Element => {
	const [emblaRef, emblaAPI] = useEmblaCarousel({ loop: true }, [Autoplay()])
	const [products, setProducts] = useState([
		{
			id: 1,
			name: 'product 1',
			price: 100,
			image: 'https://picsum.photos/300/300'
		},
		{
			id: 2,
			name: 'product 2',
			price: 200,
			image: 'https://picsum.photos/300/300'
		},
		{
			id: 3,
			name: 'product 3',
			price: 300,
			image: 'https://picsum.photos/300/300'
		}
	])

	useEffect(() => {
		if (emblaAPI) {
			console.log(emblaAPI.slideNodes())
		}
	}, [emblaAPI])

	return (
		<div className='overflow-hidden w-full p-8 border' ref={emblaRef}>
			<div className="flex gap-8">
				{products.map((product) => (
					<div key={product.id} className='flex-[0_0_100%] flex flex-col items-center border-1 shadow-lg p-6 rounded-md'>
						<Image width={300} height={300} src={product.image} alt={product.name} />
						<p>{product.name}</p>
						<p>{product.price}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default LandingCarousel
