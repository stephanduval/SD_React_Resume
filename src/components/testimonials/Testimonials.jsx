import React from "react";
import "./testimonials.css";
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
      "Stephan is a great person and a good communicator.  He took time to understand the purpose for the software he was developing and worked with me for months to achive my research goals.  He also understands the ethical issues behind research and posting fake testamonials.  He is eagerly awaiting an actual testamonial from Hannes.",
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
