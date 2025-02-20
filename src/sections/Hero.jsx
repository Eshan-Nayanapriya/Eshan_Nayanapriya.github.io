import React from "react";
import profilepicture from "../assets/images/profilepic.png";
import ICON1 from "../assets/images/icon_1.png";
import ICON2 from "../assets/images/icon_2.png";
import ICON3 from "../assets/images/icon_3.png";
import ICON4 from "../assets/images/icon_4.png";
import ICON5 from "../assets/images/icon_5.png";
import ICON6 from "../assets/images/icon_6.png";
import StatInfoCard from "../components/StatInfoCard";
import { STATS } from "../utils/data";

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

        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[420px] bg-blue-300/50 rounded-3xl relative order-1 lg:order-2">
          <img src={profilepicture} alt="Profile Pic" className="profile-pic" />

          <img
            src={ICON6}
            alt="ICON1"
            className="icon-img -left-10 bottom-36 rotate-[1.75deg]"
          />
          <img
            src={ICON3}
            alt="ICON1"
            className="icon-img -left-10 bottom-10 rotate-[1.75deg]"
          />
          <img
            src={ICON2}
            alt="ICON2"
            className="icon-img left-5 md:left-10 -bottom-6 rotate-[1.75deg]"
          />
          <img
            src={ICON4}
            alt="ICON3"
            className="icon-img left-[110px] md:left-[150px] -bottom-12 rotate-[1.75deg]"
          />
          <img
            src={ICON1}
            alt="ICON4"
            className="icon-img left-[200px] md:left-[275px] -bottom-9 md:-bottom-10 rotate-[4.75deg]"
          />
        </div>
      </div>

      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
        {STATS.map((item) => (
          <StatInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
