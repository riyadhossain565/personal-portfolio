import { Link } from "react-router-dom";
import Container from "../../shared/Container";

const ChoiceMate = () => {
  return (
    <div>
      <Container>
        <div className="px-6 py-20">
          <Link
            className="bg-[#C47623] hover:bg-[#895319] px-5 py-2 rounded-lg"
            to="/"
          >
            Back
          </Link>
          <h2 className="text-4xl font-bold mb-6 text-center text-[#C47623]">
            Project ChoiceMate
          </h2>

          <div className="bg-gray-900 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Main Technology Stack
            </h3>
            <p className="mb-6">React, Tailwind CSS, Axios, Firebase, Express.Js, MongoDB</p>

            <h3 className="text-2xl font-semibold mb-4">Brief Description</h3>
            <p className="mb-6">
              ChoiceMate is an intuitive and user-friendly platform designed to
              help you make better decisions. Whether you're choosing a product,
              service, or solution, ChoiceMate simplifies the decision-making
              process by offering personalized recommendations, user reviews,
              and side-by-side comparisons.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Live Project Link</h3>
            <a
              href="https://choice-mate.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C47623] hover:underline"
            >
              View Live Project
            </a>

            <h3 className="text-2xl font-semibold mb-4 mt-6">
              GitHub Repository
            </h3>
            <a
              href="https://github.com/riyadhossain565/ChoiceMate-client"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C47623] hover:underline"
            >
              View GitHub Repository (Client Side)
            </a>

            <h3 className="text-2xl font-semibold mb-4 mt-6">
              Challenges Faced
            </h3>
            <p className="mb-6">
              The main challenges I faced while developing this project were:
              <ul className="list-disc ml-6 mt-4">
                <li>
                  Integrating JWT for secure authentication and authorization.
                </li>
                <li>
                Setting up backend hosting, managing environment variables, and ensuring smooth scaling of the application.
                </li>
              </ul>
            </p>

            <h3 className="text-2xl font-semibold mb-4 mt-6">
              Potential Improvements and Future Plans
            </h3>
            <p>
              There are several improvements I plan to make in the future,
              including:
              <ul className="list-disc ml-6 mt-4">
                <li>Implementing more refined permissions for different user roles to enhance security.</li>
                <li>Adding more insightful analytics and real-time tracking features for better user and data management.</li>
                <li>Utilizing caching mechanisms and indexing in MongoDB to improve data retrieval speed.</li>
              </ul>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChoiceMate;
