import { Link } from "react-router-dom";
import Container from "../../shared/Container";

const QuickSend = () => {
  return (
    <div>
      <Container>
        <div className="px-6 py-20">
            <Link className="bg-[#C47623] hover:bg-[#895319] px-5 py-2 rounded-lg" to="/">Back</Link>
          <h2 className="text-4xl font-bold mb-6 text-center text-[#C47623]">
            Project QuickSend
          </h2>

          <div className="bg-gray-900 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Main Technology Stack
            </h3>
            <p className="mb-6">React, Tailwind CSS, Firebase, Express.js, MongoDB, JWT, Axios, Axios Interceptor</p>

            <h3 className="text-2xl font-semibold mb-4">Brief Description</h3>
            <p className="mb-6">
              QuickSend - Parcel Delivery Management System is a comprehensive
              platform designed to streamline and simplify the management of
              parcel deliveries. It allows users to book and track their
              parcels, delivery men to manage their routes, and admins to
              oversee the entire process with real-time tracking and detailed
              reports.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Live Project Link</h3>
            <a
              href="https://quick-send-f2412.web.app/"
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
              href="https://github.com/riyadhossain565/QuickSend-client"
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
                  Working with MongoDB aggregation for efficient data retrieval
                  and manipulation.
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
                <li>Adding more features like notifications and reminders.</li>
              </ul>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QuickSend;
