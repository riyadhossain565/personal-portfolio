import Container from "../shared/Container";

const AboutMe = () => {
  return (
    <div id="about" className="py-16 bg-gray-900 text-white">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-[#C47623] text-center mb-8">
          👋 About Me
        </h2>

        <div className="">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              Hello! I'm{" "}
              <span className="text-[#C47623] font-bold">Riyad Hossain</span>, a
              passionate
              <span className="font-semibold">
                {" "}
                Front-End Web Developer
              </span>{" "}
              with a deep love for crafting interactive and visually appealing
              user experiences. My journey in programming has been fueled by
              curiosity, creativity, and the drive to build meaningful
              applications that make an impact.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-[#C47623] my-3">
                🚀 My Programming Journey
              </h3>
              <p className="text-gray-300">
              I started learning HTML and CSS through Google and YouTube, but JavaScript felt too difficult to grasp on my own. Then, I discovered <strong> Programming Hero </strong> through a video by Jhankar Mahbub and enrolled in their course. That’s where my real journey began—I mastered JavaScript, React.js, Firebase Authentication, Express.js, and MongoDB, gaining both technical skills and a problem-solving mindset.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#C47623]">
                💡 The Work I Enjoy
              </h3>
              <p className="text-gray-300 my-3">
                I thrive in developing dynamic and intuitive user interfaces
                that enhance user experience. Some of the things I enjoy working
                on include:
              </p>
              <ul className="space-y-2">
                <li> ✅ Creating clean, scalable, and maintainable code.</li>
                <li>
                  {" "}
                  ✅ Developing fully responsive, mobile-friendly designs.
                </li>
                <li>
                  {" "}
                  ✅ Collaborating on real-world projects that solve meaningful
                  problems.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#C47623]">
                🎨 Beyond Coding
              </h3>
              <p className="text-gray-300 my-3">
                While coding is a big part of my life, I also have a range of
                interests outside of programming that keep me balanced and
                inspired:
              </p>
              <ul className="space-y-2">
                <li>
                  {" "}
                  📚 Reading Books – I enjoy reading books in my free time.
                </li>
                <li>
                  {" "}
                  📸 Photography – Capturing aesthetic moments and experimenting
                  with creative angles.
                </li>
                <li>
                  {" "}
                  🌍 Continuous Learning – Always on the lookout for the latest
                  developments in technology, business, and innovation.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold my-3 text-[#C47623]">
                ✨ My Personality & Work Ethic
              </h3>
              <p className="text-gray-300">
                I consider myself an organized, responsible, and highly
                motivated individual. I believe in continuous growth and always
                strive for excellence, creativity, and efficiency in my work.
                Whether working individually or collaborating in a team, I am
                committed to delivering high-quality projects that leave a
                lasting impact.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
