import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../Components/CTA";
import { currency } from "../assets/icons";
import Card from "./Card";

function Projects() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{"    "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="text-slate-500 mt-5 flex flex-col gap-3">
        <p>
          Among the numerous projects I've undertaken, a select few hold a
          special place in my heart. These endeavors, marked by passion and
          collaboration, stand out as more than tasks—they represent shared
          achievements and profound growth. Your valued collaboration has been
          pivotal in turning challenges into successes. Together, we've woven a
          story of innovation, dedication, and meaningful creation. Explore
          these projects, a testament to our joint pursuit of excellence and the
          joy found in crafting something truly remarkable.
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full " key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex item-center gap-2">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <h1 className=" mt-10 mb-10 subhead-text">
        My {" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Certificates & Certifications
        </span>
      </h1>

      <Card/>
      <hr className="border-slate-200 m-10" />
      <CTA />
    </section>
  );
}

export default Projects;
