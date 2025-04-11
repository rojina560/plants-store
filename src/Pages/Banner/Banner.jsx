
import banner1 from '..//../assets/images/banner1.jpg'
import banner2 from '..//../assets/images/banner2.jpg'
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
    
              <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative"
      >
        <SwiperSlide><img  className='w-full h-auto'  src={banner1}alt="" /> <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute bottom-20 w-full text-center"
      >
        <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 inline-block px-6 py-3 rounded-xl"> soil,fertilizer and accessiories for your garden
        </h1> 
      </motion.div></SwiperSlide>
        
        <SwiperSlide><img className='w-full  h-auto' src={banner2}alt="" /><motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute bottom-20 w-full text-center"
      >
        <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 inline-block px-6 py-3 rounded-xl"> platns for your home and gerden
        </h1> 
      </motion.div></SwiperSlide>
        
      </Swiper>
       
    );
};

export default Banner;