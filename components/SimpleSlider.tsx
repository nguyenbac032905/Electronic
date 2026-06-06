"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SimpleSlider = () => {
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1
    };
    return(
        <div className="max-w-screen-2xl mx-auto px-16 max-md:px-10 slider-container">
            <Slider {...setting}>
                <div className="h-[500px] max-lg:h-[400px] max-md:h-[250px] max-[500px]:h-[200px] max-[400px]:h-[150px]">
                    <img src="/slider image 1.webp" alt="slider 1" className="h-full"/>
                </div>
                <div className="h-[500px] max-lg:h-[400px] max-md:h-[250px] max-[500px]:h-[200px] max-[400px]:h-[150px]">
                    <img src="/slider image 2.webp" alt="slider 2" className="h-full"/>
                </div>
            </Slider>
        </div>
    )
}
export default SimpleSlider;