import React from "react";
import { skills, experiences, training, socialLinks } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../Components/CTA";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          ANUP
        </span>
      </h1>
      <div className="text-slate-500 mt-5 flex flex-col gap-3">
        <p>
          A Motivated and detail-oriented Software and Front-End Developer with
          a strong academic background in computer science. Possesses excellent
          problem-solving skills and a keen eye for design. Eager to contribute
          to a dynamic and collaborative team.
        </p>
      </div>
      <div className=" py-10 flex flex-col">
        <div className=" flex flex-wrap justify-center text-center gap-5">
          {socialLinks.map((link) => (
            <NavLink to={link.link} key={link.name}>
              <div className="block-container w-10 h-10">
                <div className="btn-back rounded-xl" />
                <div className="flex justify-center items-center btn-front rounded-xl">
                  <img
                    src={link.iconUrl}
                    alt={link.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className=" py-10 flex flex-col">
        <h3 className="subhead-text"> My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="flex justify-center items-center btn-front rounded-xl">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text"> Work Experience</h3>
        <div className="text-slate-500 mt-5 flex flex-col gap-3">
          <p>
            Experienced and results-oriented front-end developer with a strong
            technical background, serving as the Technical Head at KHOJ Find Ur
            Real You in LPU . Proven track record of successfully managing
            technical issues and leading the development of the official
            website. Adept at combining technical expertise with strategic
            thinking to drive organizational success.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experiences) => (
              <VerticalTimelineElement
                key={experiences.id}
                date={experiences.date}
                icon={
                  <div className="flex  justify-center items-center w-full h-full">
                    <img
                      src={experiences.icon}
                      alt={experiences.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experiences.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experiences.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experiences.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experiences.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experiences.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      {/* traning  */}
      <div className="py-16">
        <h3 className="subhead-text"> My Training</h3>
        <div className="text-slate-500 mt-5 flex flex-col gap-3">
          <p>
            Skilled in competitive programming (JAVA) with top performance in
            coding challenges. Proficient in data structures and algorithms.
            Completed React.js training, gaining expertise in essential concepts
            and collaborative project experience using Git and GitHub. Also
            completed a cyber security course from MeitY, Government of India,
            demonstrating a proactive commitment to professional development.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {training.map((training) => (
              <VerticalTimelineElement
                key={training.id}
                date={training.date}
                icon={
                  <div className="flex  justify-center items-center w-full h-full">
                    <img
                      src={training.icon}
                      alt={training.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: training.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: training.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {training.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {training.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {training.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      {/* ===== */}
      <h1 className="head-text mb-10">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Education
        </span>
      </h1>

      <div>
        <div className="border-b border-gray/20 h-[110px] mb-[20px] flex gap-7 ">
          <div className="max-w-[476px]">
            <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
              B.Tech. in Computer Science
            </h4>
            <p className="font-secondary leading-tight">
              Lovely Professional University |Phagwara, IN
            </p>
            <p className="text-[12px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text  text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              CGPA 7.40
            </p>
          </div>
          <div>Apr 2020 - Present</div>
        </div>
      </div>
      <div>
        <div className="border-b  gap-7 border-/20 h-[110px] mb-[20px] flex">
          <div className="max-w-[476px]">
            <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
              Higher Secondary School (10+2)
            </h4>
            <p className="font-secondary leading-tight">
              Jeewan Public School|Motihari, IN
            </p>
            <p className="text-[12px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text  text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Marks 76.02%
            </p>
          </div>
          <div>June 2018 - March-2019</div>
        </div>
      </div>
      <div>
        <div className="border-b gap-7  border-gray/20 h-[110px] mb-[20px] flex">
          <div className="max-w-[476px]">
            <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
              Secondary School
            </h4>
            <p className="font-secondary leading-tight">
              Galaxy Residential Public School |Chapara, IN
            </p>
            <p className="text-[12px] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text  text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              CGPA 10
            </p>
          </div>
          <div>March 2017 -April 2018</div>
        </div>
      </div>

    
      <CTA />
    </section>
  );
}

export default About;
