import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "./index.scss";
import { getBanner } from "../../api";

function MySwiper() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    getBanner().then((res) => {
      setBanner(res.banners);
    });
  }, []);

  return (
    <Swiper
      spaceBetween={20}
      grabCursor={true}
      loop
      modules={[Autoplay]}
      autoplay
    >
      {banner.map((item) => (
        <SwiperSlide key={item.targetId}>
          <img className="filter" alt="" src={item.imageUrl} />
          <div>
            <img alt="" src={item.imageUrl} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MySwiper;
