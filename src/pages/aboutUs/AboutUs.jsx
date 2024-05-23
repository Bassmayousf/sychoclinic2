import React from 'react';
import Team from '../../components/assets/undraw_team_spirit_re_yl1v.svg'
import Man from '../../components/assets/man.jpg'

const AboutUs = () => {
  return (
    <div id='aboutus'> 
      <section className="container d-flex flex-column justify-content-center align-items-center  w-75 py-5">
        <h2 className=" fw-bold fs-1   text-center  after position-relative">Team Members</h2>
        <div className="w-50 bgHome border-bottom border-opacity-25 border-secondary border-3 shadow rounded-5 p-3 my-4 ">
            <p className="fw-bold">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
        </div>
        <div className="row g-2 w-75 justify-content-center">
            <div className=" col-xl-4 col-lg-6     ">
                <div className="card bo-col bg-light p-3 shadow-sm border border-3 text-start border-primary    rounded-5">
                    <div className="   py-2  d-flex flex-column justify-content-center align-items-center">
                        <div className="img-card1 border border-2 rounded-circle border-secondary ">
                            <img src={Man} className="w-100 rounded-circle" alt="man"/>
                        </div>
                    </div>
                    <p className="lh-sm">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words. </p>
                </div>

            </div>
            <div className=" col-xl-4 col-lg-6">
                <div className="card bo-col bg-light p-3 shadow-sm border border-3 text-start border-primary   rounded-5">
                    <div className="   py-2  d-flex flex-column justify-content-center align-items-center">
                        <div className="img-card1 border border-2 rounded-circle border-secondary ">
                            <img src={Man}className="w-100 rounded-circle" alt="man"/>
                        </div>
                    </div>
                    <p className="lh-sm">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words. </p>
                </div>
            </div>
            <div className=" col-xl-4 col-lg-6     ">
                <div className="card bo-col bg-light p-3 shadow-sm border border-primary  border-3 text-start border-primary   rounded-5">
                    <div className="   py-2  d-flex flex-column justify-content-center align-items-center">
                        <div className="img-card1 border border-2 rounded-circle border-secondary ">
                            <img src={Man} className="w-100 rounded-circle" alt="man"/>
                        </div>
                    </div>
                    <p className="lh-sm">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words. </p>
                </div>
            </div>
            <div className=" col-xl-4 col-lg-6     ">
                <div className="card bo-col bg-light p-3 shadow-sm border border-3 text-start border-primary   rounded-5">
                    <div className=" py-2    d-flex flex-column justify-content-center align-items-center">
                        <div className="img-card1 border border-2 rounded-circle border-secondary ">
                            <img src={Man} className="w-100 rounded-circle" alt="man"/>
                        </div>
                    </div>
                    <p className="lh-sm">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words. </p>
                </div>
            </div>
            <div className=" col-xl-4 col-lg-6     ">
                <div className="card bo-col bg-light p-3 shadow-sm  border border-3 text-start border-primary   rounded-5">
                    <div className="   py-2  d-flex flex-column justify-content-center align-items-center">
                        <div className="img-card1 border border-2 rounded-circle border-secondary ">
                            <img src={Man} className="w-100 rounded-circle" alt="man"/>
                        </div>
                    </div>
                    <p className="lh-sm">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words. </p>
                </div>
            </div>
        </div>


    </section>
    <div id="test" className="bgHome border-bottom border-opacity-25 border-secondary border-3 shadow">
    <div className="container ">
      <div className="row ">
        <div className="col-md-7 d-flex justify-content-center flex-column align-items-center pt-5 pt-lg-0 ">
          <h2 className="pb-1  fw-bold after position-relative">About Us</h2>
          <div
            className="w-75 bg-light border-bottom border-opacity-25 border-secondary border-3 shadow rounded-4 p-3 mt-4 ">
            <p className=''>
              ntrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical
              Latin literature from 45 BC, making it over 2000es of the word in classNameical literature, discovered the
              undoubtable source.you can support us.
            </p>
          </div>
        </div>
        <div className="col-md-5 pt-3 ">
          <img className="w-100" src={Team} alt=""/>
        </div>
      </div>
    </div>
</div>
</div>
  );
}

export default AboutUs;
