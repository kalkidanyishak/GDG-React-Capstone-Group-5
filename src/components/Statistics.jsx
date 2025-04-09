import React from "react";
import statisticsBg from "../assets/statistics-bg.png";
import { FiAward } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LiaMountainSolid } from "react-icons/lia";
function Statistics() {
  const statisticsData = [
    { icon: <HiOutlineUserGroup />, number: "126", label: " Satisfied Client" },
    { icon: <IoPersonOutline />, number: "230", label: " New Traveller" },
    { icon: <LiaMountainSolid />, number: "230", label: "Destination" },
    { icon: <FiAward />, number: "230", label: "Award" },
  ];
  return (
    <div className="py-16 lg:py-24  relative text-white ">
      <div
        style={{ backgroundImage: `url(${statisticsBg})` }}
        className="absolute inset-0 bg-no-repeat bg-cover  bg-center filter blur-[1.5px] z-[-1] "
      ></div>
      <div className="absolute inset-0  bg-black opacity-10 "></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statisticsData.map((statistics, index) => (
            <div key={index} className="flex justify-center">
              <div className="text-7xl mb-3 px-3 flex ">{statistics.icon}</div>
              <div>
                <p className="text-4xl font-bold mb-1">
                  {statistics.number}
                  <sup>+</sup>
                </p>
                <p className="text-lg">{statistics.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Statistics;
