import React, { useEffect, useState } from "react";


import Card from "../cards/Card";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";

const Feedback = () => {
  const [data,setData]= useState([])
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('http://sychoclinicapi2.runasp.net/api/feedbacks');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
    console.log('test')
    // console.log(data)
  },[])

  
    const showData = data&& data.map((e)=>{
      return(
        <SwiperSlide key={e.id} >
        <Card name={e.name} feedback={e.feedback} />
      </SwiperSlide>
      )
    })



  return (
    <div
      id="FeedBack"
      className="d-flex bgHome border-none  shadow justify-content-center align-items-center flex-column py-5 "
    >
      <h2 className=" fw-bold fs-1 pb-2 mb-4 text-center m-auto fw-bold after position-relative">
        Feedback
      </h2>
      <div className="container   ">
      
          <div className="carousel-inner  my-md-5 text-center rounded-4">
            
            <Swiper
              // install Swiper modules
              // loop={true}
              autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
              }}
              modules={[Autoplay,Navigation, Pagination, A11y]}
              spaceBetween={50}
              // navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
              breakpoints={{
                // when window width is >= 992px (large screens)
                992: {
                  slidesPerView: 3,
                },
                // when window width is < 992px (phone screens)
                0: {
                  slidesPerView: 1,
                },
              }}
            >
              {/* <SwiperSlide >
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide> */}
              {showData}
            
            </Swiper>
          </div>
        
      </div>
    </div>
  );
};

export default Feedback;
