/* eslint-disable react/prop-types */
import React from "react";

const SkillCard = ({ icon, skillName, progress }) => {
  return (
    <div className="bg-white rounded-2xl border border-[#d3d9ff] p-4">
      <div className="flex gap-3">
        <div className="w-7 h-7 flex items-center justify-center bg-gradient-to-b from-[#ddf1ff] to-[#ffffff] rounded-[7px]">{icon}</div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[15px] mt-0.5 text-black font-medium">{skillName}</p>
            {/* <p className="text-xs text-secondary font-medium">{progress} %</p> */}
          </div>

          {/* <div className="w-full bg-background rounded-md h-[5px] relative mt-2"></div> */}
          {/* <div
            className="bg-primary h-[5px] rounded-md"
            style={{ width: `${progress}%` }}
          ></div> */}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
