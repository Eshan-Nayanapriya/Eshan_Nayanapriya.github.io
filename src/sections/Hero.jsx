import React from "react";
import { Link } from "react-scroll";
import profilepicture from "../assets/images/profilepic.png";
import ICON1 from "../assets/images/icon_1.png";
import ICON2 from "../assets/images/icon_2.png";
import ICON3 from "../assets/images/icon_3.png";
import ICON4 from "../assets/images/icon_4.png";
import ICON5 from "../assets/images/icon_5.png";
import ICON6 from "../assets/images/icon_6.png";
import StatInfoCard from "../components/StatInfoCard";
import { IoMdDownload } from "react-icons/io";
import { STATS } from "../utils/data";
import resume from "../assets/files/Eshan_Nayanapriya_CV.pdf";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Eshan_Nayanapriya_CV.pdf";
    link.click();
  };

  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl</section> lg:text-2xl font-medium text-black">
            👋 Hi, I&apos;m Eshan Nayanapriya
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">
            A Full Stack Developer, Software Engineer
          </h1>
          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            I&apos;m an aspiring software engineer passionate about building
            innovative solutions and continuously expanding my skill set. I
            enjoy working on diverse projects, tackling challenges, and learning
            new technologies to stay adaptable in the ever-evolving tech
            landscape.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <Link
              to="projects"
              smooth
              spy={true}
              offset={-80}
              className="flex items-center justify-center flex-1 md:flex-none action-btn-outline btn-scale-anim cursor-pointer"
            >
              View My Work
            </Link>

            <button
              onClick={handleDownload}
              className="flex-1 md:flex-none action-btn btn-scale-anim"
            >
              <div className="flex items-center justify-center gap-3">
                Download Resume
                <IoMdDownload />
              </div>
            </button>
          </div>
        </div>

        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[420px] bg-blue-300/50 rounded-3xl relative order-1 lg:order-2">
          <img src={profilepicture} alt="Profile Pic" className="profile-pic" />

          <img
            src={ICON1}
            alt="ICON1"
            className="icon-img -left-10 bottom-60 rotate-[1.75deg]"
          />
          <img
            src={ICON6}
            alt="ICON2"
            className="icon-img -left-10 bottom-36 rotate-[1.75deg]"
          />
          <img
            src={ICON3}
            alt="ICON3"
            className="icon-img -left-10 bottom-10 rotate-[1.75deg]"
          />
          <img
            src={ICON2}
            alt="ICON4"
            className="icon-img left-5 md:left-10 -bottom-6 rotate-[1.75deg]"
          />
          <img
            src={ICON4}
            alt="ICON5"
            className="icon-img left-[110px] md:left-[150px] -bottom-12 rotate-[1.75deg]"
          />
          <img
            src={ICON5}
            alt="ICON6"
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
