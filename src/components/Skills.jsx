import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Container from "../shared/Container";
import { IoLogoFigma } from "react-icons/io5";

const Skills = () => {
  return (
    <div id="skills" className="py-16  text-white">
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-[#C47623] text-center mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-xl font-semibold text-[#C47623] mb-4">
              Frontend Development
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <FaHtml5 className="mr-2 text-2xl text-orange-600" />
                  <span>HTML</span>
                </div>
                <div className="h-2 bg-gray-600 rounded-full">
                  <div
                    className="h-full bg-orange-600"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <FaCss3Alt className="mr-2 text-2xl text-blue-600" />
                  <span>CSS</span>
                </div>
                <div className="h-2 bg-gray-600 rounded-full">
                  <div
                    className="h-full bg-blue-600"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <FaJsSquare className="mr-2 text-2xl text-yellow-500" />
                  <span>JavaScript</span>
                </div>
                <div className="h-2 bg-gray-600 rounded-full">
                  <div
                    className="h-full bg-yellow-500"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <FaReact className="mr-2 text-2xl text-blue-500" />
                  <span>React.js</span>
                </div>
                <div className="h-2 bg-gray-600 rounded-full">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-xl font-semibold text-[#C47623] mb-4">
              Backend Development
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <FaNodeJs className="mr-2 text-2xl text-green-600" />
                  <span>Node.js</span>
                </div>
                <div className="h-2 bg-gray-600 rounded-full">
                  <div
                    className="h-full bg-green-600"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <SiExpress className="mr-2 text-2xl text-green-600" />
                  <span>Express.js</span>
                </div>
                <div className="h-2 bg-gray-600 rounded-full">
                  <div
                    className="h-full bg-green-500"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <SiMongodb className="mr-2 text-2xl text-green-600" />
                  <span>MongoDB</span>
                </div>
                <div className="h-2 bg-gray-600 rounded-full">
                  <div
                    className="h-full bg-green-400"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold text-[#C47623] mb-4">Tools</h3>
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <FaGithub className="mr-2 text-2xl text-gray-600" />
                <span>Git & GitHub</span>
              </div>

              <div className="flex items-center mb-4">
                <VscVscode className="mr-2 text-2xl text-blue-600" />
                <span>VS Code</span>
              </div>

              <div className="flex items-center mb-4">
                <IoLogoFigma className="mr-2 text-2xl text-orange-600" />
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
