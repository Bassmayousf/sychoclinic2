import React, { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from 'axios';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import CardGroub from '../../components/cardGroup/CardGroub';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Articales = () => {
  const [articlesCategory ,setArticlesCategory] = useState([])
  const [allArticles,setAllArticles]= useState([])
  const [categoryArticles, setCategoryArticles] = useState([]);

  useEffect(()=>{
    const fechArticleCat = async()=>{
      try{
          const response = await axios.get("http://sychoclinicapi2.runasp.net/api/Categories/type")
               setArticlesCategory(response.data)
          console.log(response.data)
      }catch(error){

      }
    }
    fechArticleCat()


  },[])
  useEffect(()=>{
    const fechArticleCat = async()=>{
      try{
          const response = await axios.get("http://sychoclinicapi2.runasp.net/api/Categories")
               setAllArticles(response.data)
          console.log(response.data)
      }catch(error){

      }
    }
    fechArticleCat()


  },[])
  useEffect(() => {
    if (articlesCategory.length > 0 && allArticles.length > 0) {
    

    
const organizedArray = allArticles.map(item => {
  const correspondingItem = articlesCategory.find(obj => obj.id === item.categoriesArticleId);
  return {
    ...item,
    correspondingItem: {
      ...correspondingItem,
      description: correspondingItem.description,
      categoryName: correspondingItem.typeName,
      image: correspondingItem.image,
    },
  };
});
const categories = articlesCategory.reduce((uniqueCategories, item) => {
  if (!uniqueCategories.includes(item.typeName)) {
    uniqueCategories.push(item.typeName);
  }
  return uniqueCategories;
}, []);
const categoryArticlesData = categories.map(category => {
  const articles = organizedArray.filter(item => item.correspondingItem.typeName === category);
  return { category, articles };
});
      console.log("articlesCategory:", articlesCategory);
      console.log("allArticles:", allArticles);
      // console.log("firstArrayMap:", firstArrayMap);
      console.log("organizedArray:", organizedArray);   
    setCategoryArticles(categoryArticlesData)
    // console.log(categoryArticles)
    }
  }, [articlesCategory, allArticles]);

  return (
    <div id='articles'>
  


{categoryArticles.map(categoryItem => (
          <div
          key={categoryItem.category}
          className="d-flex bgHome border-none  shadow justify-content-center align-items-center flex-column py-5 "
        >
<h2  className=" fw-bold fs-1 pb-2  mb-5 mt-3 text-center m-auto fw-bold after position-relative">
          {categoryItem.category}

        </h2> 
        
        
        
        
                 

            {categoryItem.articles.map(article => (
              // <ul key={article.id}>
              //   <li style={{fontSize:"20px"}}>{article.categoryName}</li>
              //   <li>{article.description}</li>
              //   <li><img src={article.image} alt="" /></li>
              
              // </ul>

              <div className="container ">
                 
                        <div className="   text-center w-100 rounded-5">
                          
                          <Swiper
                           loop={true}
                           autoplay={{
                               delay: 2000,
                               disableOnInteraction: false
                           }}
                          className=' '
                            // install Swiper modules
                            modules={[Autoplay,Navigation, Pagination, A11y]}
                            spaceBetween={50}
                            // navigation
                            pagination={{ clickable: true }}
                            
                          >
                            <SwiperSlide key={article.id}>
                              <CardGroub/>
                            </SwiperSlide>
                            {/* <SwiperSlide>
                              <CardGroub />
                            </SwiperSlide> */}
                          
                          </Swiper>
                        </div>
                      
                    </div>
                
                
                
              ))}
        
              <hr className="" style={{height:"10px"}} />
        
            </div>
      ))}
      {/* </div> */}

  {
    /*    <div className="container ">
  
          <div className="   text-center w-100 rounded-5">
            
            <Swiper
             loop={true}
             autoplay={{
                 delay: 2000,
                 disableOnInteraction: false
             }}
            className=' '
              // install Swiper modules
              modules={[Autoplay,Navigation, Pagination, A11y]}
              spaceBetween={50}
              // navigation
              pagination={{ clickable: true }}
              
            >
              <SwiperSlide>
                <CardGroub/>
              </SwiperSlide>
              <SwiperSlide>
                <CardGroub />
              </SwiperSlide>
            
            </Swiper>
          </div>
        
      </div>
      <hr className="" style={{height:"10px"}} />

    </div>
      <div
      className="d-flex bgHome border-none  shadow justify-content-center align-items-center flex-column py-5 "
    >
      <h2 className=" fw-bold fs-1 pb-2 mb-5 mt-3 text-center m-auto fw-bold after position-relative">
      Mental health inequality
      </h2>
      <div className="container ">
  
          <div className="   text-center w-100 rounded-5">
            
            <Swiper
             loop={true}
             autoplay={{
                 delay: 2000,
                 disableOnInteraction: false
             }}
            className=' '
              // install Swiper modules
              modules={[Autoplay,Navigation, Pagination, A11y]}
              spaceBetween={50}
              // navigation
              pagination={{ clickable: true }}
            
            >
              <SwiperSlide>
                <CardGroub/>
              </SwiperSlide>
              <SwiperSlide>
                <CardGroub />
              </SwiperSlide>
            
            </Swiper>
          </div>
        
      </div>

      <hr className="line-down"/>
    </div>
      <div
      className="d-flex bgHome border-none  shadow justify-content-center align-items-center flex-column py-5 "
    >
      <h2 className=" fw-bold fs-1 pb-2  mb-5 mt-3 text-center m-auto fw-bold after position-relative">
      Mental health inequality
      </h2>
      <div className="container ">
  
          <div className="   text-center w-100 rounded-5">
            
            <Swiper
             loop={true}
             autoplay={{
                 delay: 2000,
                 disableOnInteraction: false
             }}
            className=' '
              // install Swiper modules
              modules={[Autoplay,Navigation, Pagination, A11y]}
              spaceBetween={50}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
              // breakpoints={{
              //   // when window width is >= 992px (large screens)
              //   992: {
              //     slidesPerView: 3,
              //   },
              //   // when window width is < 992px (phone screens)
              //   0: {
              //     slidesPerView: 1,
              //   },
              // }}
            >
              <SwiperSlide data-swiper-autoplay="2000">
                <CardGroub/>
              </SwiperSlide >
              <SwiperSlide data-swiper-autoplay="2000">
                <CardGroub />
              </SwiperSlide>
            
            </Swiper>
          </div>
         
      </div>
      <hr />
*/}
    </div>
            
  
  );
}

export default Articales;
