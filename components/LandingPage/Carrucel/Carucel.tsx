"use client"
import Image from "next/image"
import "./Carrucel.css"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"

const Carrucel = ()=>{
    return (
        <div className="conteiner">
            <Swiper
           effect={"coverflow"}
           grabCursor={true}
           centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={0}
            coverflowEffect={
                {
                 rotate: 0,
                 stretch: 0,
                 depth: 100,
                 modifier: 2.5,
                }
            }
            pagination= {{el:"swiper-pagination", clickable:true}}
            navigation= { {
                nextEl:".swiper-button-next",
                prevEl:".swiper-button-prev",

            }}
            modules={[EffectCoverflow,Pagination, Navigation, Autoplay]}
            autoplay={{delay:3000}}
            className="swiper_container"
            >
                <SwiperSlide>
                    <Image src="/images.jpg" height={300} width={200} alt="img"/>
                </SwiperSlide> 

                <SwiperSlide>
                    <Image src="/helado.jpeg" height={300} width={200} alt="img"/>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/hamburguesa.jpg" height={300} width={200} alt="img"/>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/empanadas2.jpeg" height={300} width={200} alt="img"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images.jpg" height={300} width={200} alt="img"/>
                </SwiperSlide> 

                <SwiperSlide>
                    <Image src="/helado.jpeg" height={300} width={200} alt="img"/>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/hamburguesa.jpg" height={300} width={200} alt="img"/>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/empanadas2.jpeg" height={300} width={200} alt="img"/>
                </SwiperSlide>
                 <SwiperSlide>
                    <Image src="/images.jpg" height={300} width={200} alt="img"/>
                </SwiperSlide> 

                <SwiperSlide>
                    <Image src="/helado.jpeg" height={300} width={200} alt="img"/>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/hamburguesa.jpg" height={300} width={200} alt="img"/>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/empanadas2.jpeg" height={300} width={200} alt="img"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images.jpg" height={300} width={200} alt="img"/>
                </SwiperSlide> 

                <SwiperSlide>
                    <Image src="/helado.jpeg" height={300} width={200} alt="img"/>
                </SwiperSlide>

             
                
            </Swiper>
        </div>
    )
}

export default Carrucel