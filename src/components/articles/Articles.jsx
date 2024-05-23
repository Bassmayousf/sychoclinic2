import React from 'react';
import UndrawArticles from '../assets/undraw_articles_wbpb.svg'

const Articles = () => {
  return (
    <div id="articels" className="bgHome  border-bottom border-opacity-25 border-secondary border-3 shadow">
    <div className="container ">
      <div className="row  d-flex justify-content-center  align-items-center ">
        <div className="col-md-5 col-8  pt-3 d-flex justify-content-center  align-items-center ">
          <img className="w-100" src={UndrawArticles} alt=''/>
        </div>

        <div className="col-md-7  d-flex justify-content-center flex-column align-items-center pt-5 pt-lg-0">
          <h2 className="pb-1 fw-bold after position-relative">Articles</h2>
          <div
            className="w-75 bg-light border-bottom border-opacity-25 border-secondary border-3 shadow rounded-4 p-3 mt-4 ">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
              ut labore et dolore magna aliqua.

              in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat, sunt in culpa qui officia
              deserunt mollit anim id est laborum." </p>
          </div>
          <button className="px-3 py-2 mt-5 mb-xxl-0 mb-4 btnCustom rounded-5">READ
            MORE</button>

        </div>
      </div>

    </div>
  </div>
  );
}

export default Articles;