import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Features.css";
import { Navigation } from "swiper/modules";

const features = [
  {
    id: 1,
    title: "دوربین مداربسته",
    icon: "/assets/icons/features/main_camera.svg",
  },
  { id: 2, title: "مانیتور", icon: "/assets/icons/features/monitor.svg" },
  { id: 3, title: "دیتا پروژکتور", icon: "/assets/icons/features/bed.svg" },
  { id: 4, title: "اسپیکر پرتابل", icon: "/assets/icons/features/bond.svg" },
  { id: 5, title: "دوربین عکاسی", icon: "/assets/icons/features/camera.svg" },
  { id: 6, title: "ساعت هوشمند", icon: "/assets/icons/features/flash.svg" },
];

export default function Features() {
  const [featureTab, setFeatureTab] = useState(3);

  return (
    <section className="features">
      <div className="secondary__container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={false}
          slidesPerView={1}
        >
          {features.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                className="feature__box"
                onClick={() => setFeatureTab(item.id)}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{
                    filter:
                      featureTab === item.id
                        ? "brightness(0) saturate(100%) invert(38%) sepia(77%) saturate(1000%) hue-rotate(230deg) brightness(95%) contrast(100%)"
                        : "none",
                  }}
                />
              </div>
              <p
                className="feature__title"
                style={{ color: featureTab === item.id ? "#7B63FF" : "#000" }}
              >
                {item.title}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
