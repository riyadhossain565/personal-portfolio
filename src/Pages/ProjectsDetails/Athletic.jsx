import { Link } from "react-router-dom";
import Container from "../../shared/Container";

const Athletic = () => {
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
          <h2 className="text-4xl font-bold my-4 text-center text-[#C47623]">
            Project Athletic Arsenal
          </h2>

          <div className="bg-gray-900 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Main Technology Stack
            </h3>
            <p className="mb-6">
              React, Tailwind CSS, Firebase, React-router-Dom, Express.js,
              MongoDB
            </p>

            <h3 className="text-2xl font-semibold mb-4">Brief Description</h3>
            <p className="mb-6">
              Athletic Arsenal is a dynamic online platform dedicated to
              empowering athletes and fitness enthusiasts with high-quality
              sports gear and equipment. Whether you're a professional athlete
              or just starting your fitness journey, Athletic Arsenal offers a
              wide range of products tailored to meet your needs.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Live Project Link</h3>
            <a
              href="https://athletic-arsenal.web.app/"
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
              href="https://github.com/riyadhossain565/Athletic_Arsenal-client_side"
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
                Managing API calls efficiently using  Fetch, handling loading states, and providing proper error feedback to users.
                </li>
                <li>
                Designing a fully responsive UI with Tailwind CSS to provide a seamless experience across different screen sizes and devices.
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
                <li>Improving the UI/UX design.</li>
                <li>Implementing more refined permissions for different user roles to enhance security.</li>
                <li>Adding JWT authentication.</li>
              </ul>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Athletic;
