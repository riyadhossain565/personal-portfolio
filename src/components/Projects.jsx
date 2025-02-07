import React from "react";
import Container from "../shared/Container";
import projectImg1 from "../assets/projects/quicksend-1.png";
import projectImg2 from "../assets/projects/choice-1.png";
import projectImg3 from "../assets/projects/athletic-arsenal-1.png";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <Container>
        <h2 className="text-4xl font-bold text-center text-[#C47623] mb-14">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <img
              src={projectImg1}
              alt="Project 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#C47623] mb-4">
                QuickSend
              </h3>
              <p className="text-gray-400 mb-4">
                Parcel Delivery Management System is a comprehensive platform
                designed to streamline and simplify the management of parcel
                deliveries...
              </p>
              <NavLink
                to="/quicksend"
                className="inline-block text-[#C47623] font-semibold hover:text-white border border-[#C47623] py-2 px-6 rounded-full transition-all hover:bg-[#C47623]"
              >
                View Details
              </NavLink>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <img
              src={projectImg2}
              alt="Project 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#C47623] mb-4">
                ChoiceMate
              </h3>
              <p className="text-gray-400 mb-4">
                ChoiceMate is an intuitive and user-friendly platform designed
                to help you make better decisions. Whether you're choosing a
                product, service, or solution...
              </p>
              <NavLink
                to="/choiceMate"
                className="inline-block text-[#C47623] font-semibold hover:text-white border border-[#C47623] py-2 px-6 rounded-full transition-all hover:bg-[#C47623]"
              >
                View Details
              </NavLink>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <img
              src={projectImg3}
              alt="Project 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#C47623] mb-4">
                Athletic Arsenal
              </h3>
              <p className="text-gray-400 mb-4">
                Athletic Arsenal is a dynamic online platform dedicated to
                empowering athletes and fitness enthusiasts with high-quality
                sports gear and equipment...
              </p>
              <NavLink
                to="/athletic"
                className="inline-block text-[#C47623] font-semibold hover:text-white border border-[#C47623] py-2 px-6 rounded-full transition-all hover:bg-[#C47623]"
              >
                View Details
              </NavLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
