// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// reviews cards
const reviews = [
  {
    id: 1,
    name: "Kamille",
    image: "/src/assets/TestimonialsPicture/person1.png",
    comment: "lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    id: 2,
    name: "Jane",
    image: "/src/assets/TestimonialsPicture/person1.png",
    comment: "lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    id: 3,
    name: "Tapaoan",
    image: "/src/assets/TestimonialsPicture/person1.png",
    comment: "lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    id: 4,
    name: "Kamille",
    image: "/src/assets/TestimonialsPicture/person1.png",
    comment: "lorem ipsum dolor sit amet, consectetur adip",
  },
];

const ReviewCard = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      {reviews.map((reviews) => {
        return (
          <SwiperSlide
            key={reviews.id}
            className="border border-[#006B6A] p-8 rounded "
          >
            {/* code here */}
            <div>
              <img
                src="/src/assets/TestimonialsPicture/Stars.png"
                alt=""
                className="h-4"
              />
              <p className="my-5">{reviews.comment}</p>

              {/* profile here */}
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/TestimonialsPicture/person1.png"
                  alt=""
                  className="h-10 w-10"
                />
                <div>
                  <p className="font-semibold">{reviews.name}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReviewCard;
