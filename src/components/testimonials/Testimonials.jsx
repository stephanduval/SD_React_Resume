import React from "react";
import "./testimondials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

//Import Swiper Styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const testimonialsData = [
  {
    avatar:
      "https://media-exp2.licdn.com/dms/image/C5603AQG34g1vpiwAcg/profile-displayphoto-shrink_200_200/0/1615825310390?e=2147483647&v=beta&t=b-lrccbt_UoovkXz4YOLFeYxos67tubPftMNfCFA6og",
    clientName: "Hannes Hepner",
    clientTitle:
      "Ph.D. candidate in Neuropsychology and Clinical Research Coordinator",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam dolorum ex, est quos officia modi magnam amet, iure magni molestiae consequatur, nesciunt nostrum. Repellat quos adipisci eveniet aut delectus obcaecati!",
  },
  {
    avatar:
      "https://media-exp2.licdn.com/dms/image/C5603AQG34g1vpiwAcg/profile-displayphoto-shrink_200_200/0/1615825310390?e=2147483647&v=beta&t=b-lrccbt_UoovkXz4YOLFeYxos67tubPftMNfCFA6og",
    clientName: " Hepner",
    clientTitle:
      "Ph.D. candidate in Neuropsychology and Clinical Research Coordinator",

    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam dolorum ex, est quos officia modi magnam amet, iure magni molestiae consequatur, nesciunt nostrum. Repellat quos adipisci eveniet aut delectus obcaecati!",
  },
  {
    avatar:
      "https://media-exp2.licdn.com/dms/image/C5603AQG34g1vpiwAcg/profile-displayphoto-shrink_200_200/0/1615825310390?e=2147483647&v=beta&t=b-lrccbt_UoovkXz4YOLFeYxos67tubPftMNfCFA6og",
    clientName: "HH",
    clientTitle:
      "Ph.D. candidate in Neuropsychology and Clinical Research Coordinator",

    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam dolorum ex, est quos officia modi magnam amet, iure magni molestiae consequatur, nesciunt nostrum. Repellat quos adipisci eveniet aut delectus obcaecati!",
  },
];

const Testimonials = () => {
  return (
    <section id="testamonials">
      <h5> Client Reviews</h5>
      <h2>Testamonials</h2>
      <Swiper
        className="container testamonials__container"
        //swiper parameters
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          type: "bullets",
        }}
      >
        {testimonialsData.map(
          ({ avatar, clientName, clientTitle, review }, index) => (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={clientName} />
              </div>
              <h5 className="client__name">{clientName}</h5>
              <h6 className="client__title">{clientTitle}</h6>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default Testimonials;
