// InspirationSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './InspirationSlider.css'; // استایل‌های سفارشی برای طراحی کاراوسل

// داده‌ها از فایل JSON (می‌توانید این بخش را از فایل مجزا بارگذاری کنید)
const categories = [
  {
    id: 1,
    name: "Living Room",
    image: "https://img.freepik.com/free-photo/living-room-design-with-couch_23-2148848676.jpg?t=st=1730976431~exp=1730980031~hmac=bd5a0c76ec9f345ca346f42439401fa14adda86804b63d7cd45b5c2123982e40&w=740",
  },
  {
    id: 2,
    name: "Dining Room",
    image: "https://img.freepik.com/free-photo/room-interior-design_23-2148899449.jpg?t=st=1730976641~exp=1730980241~hmac=bd1355384aa17f82ab78a7e24e5a044d819d1367778ceab298756f98ff5e36de&w=740",
  },
  {
    id: 3,
    name: "BedRoom",
    image: "https://img.freepik.com/premium-photo/creative-composition-cozy-stylish-bedroom-with-copy-space-template_431307-5052.jpg?w=740",
  },
  {
    id: 4,
    name: "Shoes",
    image: "https://i.imgur.com/qNOjJje.jpeg",
  },
  {
    id: 5,
    name: "Miscellaneous",
    image: "https://i.imgur.com/BG8J0Fj.jpg",
  },
];

const InspirationSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView="auto"
      centeredSlides={true}
      pagination={{ clickable: true }}
      navigation
    >
      {categories.map((category, index) => (
        <SwiperSlide key={category.id}>
          <div className={`slide-content ${index === 0 ? 'full-height' : 'reduced-height'}`}>
            <img src={category.image} alt={category.name} />
            {index === 0 && (
              <div className="slide-overlay">
                <span>{`${category.id < 10 ? `0${category.id}` : category.id} — ${category.name}`}</span>
                <h2>Inner Peace</h2>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InspirationSlider;
