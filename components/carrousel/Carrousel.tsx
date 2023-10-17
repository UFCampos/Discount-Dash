"use client"
import React from 'react'
import Image from "next/image"
import img from "@/public/loading.gif"
import Card from '../card/Card'
import { useSelector } from '@/lib/redux/hooks'
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import style from './Carrousel.module.css';
import { type Item } from '@/utils/types'
const Carrousel = () => {
    const data = useSelector(state => state.items.products);
    const error = useSelector(state => state.items.errorsItems);
    const loading = useSelector(state => state.items.isLoadItems);


  return (
    <div>
    </div>
  )
}
export default Carrousel