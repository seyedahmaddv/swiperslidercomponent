import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './InspirationSlider.css';

const categories = [
  {
    id: 1,
    name: 'Living Room',
    image: '/01.jpg', // مسیر تصویر را به صورت مناسب تنظیم کنید
  },
  {
    id: 2,
    name: 'Dining Room',
    image: '/02.jpg',
  },
  {
    id: 3,
    name: 'Bedroom',
    image: '/03.jpg',
  },
];

const InspirationSlider = () => {
  return (
    <Swiper
      slidesPerView={3}       // نمایش 3 تصویر همزمان
      spaceBetween={20}       // فاصله بین تصاویر
      navigation             // فعال کردن دکمه‌های ناوبری
      pagination={{ clickable: true }} // فعالسازی دایره‌های صفحه‌بندی
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <img src={category.image} alt={category.name} style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InspirationSlider;
