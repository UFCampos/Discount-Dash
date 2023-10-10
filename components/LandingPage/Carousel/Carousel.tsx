"use client"
import { Image } from "@nextui-org/react"
import "./Carousel.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { useSelector } from "@/lib/redux/hooks"
import Card from "@/components/card/Card"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"
import { Item } from "@/utils/types"

const Carousel = () => {

    const data = useSelector((state) => state.items.products);
    const error = useSelector((state) => state.items.errorsItems);
    const loading = useSelector((state) => state.items.isLoadItems);

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
                pagination={{ el: "swiper-pagination", clickable: true }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",

                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                autoplay={{ delay: 3000 }}
                className="swiper_container"
            >

                <>
                    {loading ? (
                        <div className="">
                            <Image src="/loading.gif" alt="Loading" />
                        </div>
                    ) : (
                        <div className="cards-cont flex flex-wrap justify-center items-center gap-4 p-4">
                            {error ? (
                                <p>Not found</p>
                            ) : (
                                data?.map((item: Item) => {
                                    {
                                        return (
                                            <SwiperSlide>
                                                <Card
                                                    key={item.id}
                                                    itemId={item.id}
                                                    name={item.name}
                                                    image={item.image}
                                                    price={item.price}
                                                    brand={item.brand}
                                                    stock={item.stock}
                                                    normalPrice={item.normalPrice}
                                                />
                                            </SwiperSlide>
                                        );
                                    }
                                })
                            )}
                        </div>
                    )}

                </>

            </Swiper>
        </div>
    )
}

export default Carousel