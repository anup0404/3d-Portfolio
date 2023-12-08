import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium  text-sm text-center ">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn text-sm">
      {btnText}
      <img src={arrow} alt="arrow" className="w-2 h-2 object-contain" />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className=" sm:leading-snug text-center neo-brutalism-blue py-4 px-4 text-white mx-5">
      Hi, I am <span className="font-semibold">Anup</span> 👋
      <br />
      Aspiring Software Engineer & Front-End Developer
    </h1>
  ),
  2: (
    <InfoBox
      text="Strong problem-solving skills, keen eye for design, and a curiosity for emerging technologies."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Fresh perspective, enthusiasm, and a commitment to excellence. Excited to explore and contribute to project success."
      link="/project"
      btnText=" Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Lets talk"
    />
  ),
};

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
