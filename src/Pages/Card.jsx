// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { certification } from "../constants";
import { arrow } from "../assets/icons";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Card() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      grabCursor={true}
      scrollbar={{ draggable: true }}
      className="w-[50%] "
    >
      {certification.map((cert) => (
        <SwiperSlide key={cert.idx}>
           <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={cert.course_Link} className="block w-full h-0 pb-[56.25%] relative overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          src={cert.course_image}
          alt="product_image1"
        />
      </Link>
            <div className="px-5  mt-5 pb-5">
              <h5 className=" blue-gradient_text  drop-shadow text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {cert.course_name}
              </h5>

              <div className="flex items-center justify-between mt-2.5 mb-5">
                <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text  text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {cert.course_school}
                </p>

                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {cert.course_date}
                </span>
              </div>
              <div className="flex items-center justify-end">
                <Link
                  target="_blank"
                  to={cert.course_Link}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Link
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default Card;
