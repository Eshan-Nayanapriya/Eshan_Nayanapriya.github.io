import React from "react";
//import profilepicture from '../assets/images/profilepicture.jpg'
//import ICON1 from '../assets/images/ICON1.png'
//import ICON2 from '../assets/images/ICON2.png'

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black">
            👋 Hi, I&apos;m Eshan Nayanapriya
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">
            A Full Stack Developer / Software Engineer
          </h1>
          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            I specialize in MERN stack development and have worked on various
            projects. I am passionate about learning new technologies and love
            to work in a challenging environment.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
              View My Work
            </button>
            <button className="flex-1 md:flex-none action-btn btn-scale-anim">
              Download Resume
            </button>
          </div>
        </div>

        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[420px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2">
          <img src="" alt="Profile Pic" className="profile-pic" />

          {/* <img src={ICON_1} alt='ICON1' className='icon-img -left-10 bottom-20 rotate-[1.75deg]' /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
