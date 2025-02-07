import Container from "../shared/Container";
import riyadImg from "../assets/img/RH(2).jpg";
import { motion } from "motion/react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Banner = () => {
  const text = "I'm Riyad Hossain";
  return (
    <div className="pt-36 mb-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {/* name & designation */}
            <div className="space-y-4 mt-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl">Hello!</h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold flex">
                {text.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    animate={{ color: ["#352323", "#C47623"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.2, // Staggered delay
                    }}
                    className="mx-[1px]"
                    style={{ display: "inline-block" }}
                  >
                    {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
                  </motion.span>
                ))}
              </h2>

              <motion.h1
                animate={{
                  x: [0, 80, 0], // Moves 80px to the right and back to the left
                  color: ["#C47623", "#FF5733", "#C47623"], // Color animation
                }}
                transition={{
                  duration: 5,
                  delay: 1,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "reverse", // Moves back and forth
                }}
                className="text-xl md:text-2xl lg:text-3xl font-bold"
              >
                Front-End Web Developer.
              </motion.h1>
            </div>

            {/* cv download btn and socila links */}
            <div className="hidden md:block">
              <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
                <a
                  href="/Riyad_CV.pdf" // Path to your file (public folder)
                  download="Riyad_Hossain_CV.pdf" // Sets the downloaded file name
                  className="flex items-center gap-2 text-xl text-[#C47623] hover:text-white px-4 py-3 rounded-full border border-[#C47623] transition-all hover:bg-[#C47623]"
                >
                  Download CV <MdOutlineFileDownload />
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-2 border border-[#C47623] hover:bg-[#C47623] text-lg text-[#C47623] hover:text-white rounded-full cursor-pointer">
                    <a
                      href="https://github.com/riyadhossain565"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="p-2 border border-[#C47623] hover:bg-[#C47623] text-lg text-[#C47623] hover:text-white rounded-full cursor-pointer">
                    <a
                      href="https://www.linkedin.com/in/riyad-hossain-996515164/"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="p-2 border border-[#C47623] hover:bg-[#C47623] text-lg text-[#C47623] hover:text-white rounded-full cursor-pointer">
                    <a
                      href="https://www.facebook.com/riad.hossain.01/"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                  </div>
                  <div className="p-2 border border-[#C47623] hover:bg-[#C47623] text-lg text-[#C47623] hover:text-white rounded-full cursor-pointer">
                    <a href="https://x.com/Riadhos58623033" target="_blank">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* image section */}
          <div>
            <div>
              <img
                className="md:w-[280px] lg:w-[350px] md:ml-16 rounded-xl border-2 border-[#C47623] shadow-xl md:rotate-6 transition duration-300 hover:rotate-0"
                src={riyadImg}
                alt=""
              />
            </div>
          </div>

          {/* for mobile version */}
          <div className="block md:hidden">
            <div className="flex flex-col md:flex-row items-center gap-6 ">
              <a
                href="/Riyad_CV.pdf" // Path to your file (public folder)
                download="Riyad_Hossain_CV.pdf" // Sets the downloaded file name
                className="flex items-center gap-2 text-xl text-[#C47623] hover:text-white px-4 py-3 rounded-full border border-[#C47623] transition-all hover:bg-[#C47623]"
              >
                Download CV <MdOutlineFileDownload />
              </a>

              <div className="flex items-center gap-4">
                <div className="p-2 border border-[#C47623] hover:bg-[#C47623] text-lg text-[#C47623] hover:text-white rounded-full cursor-pointer">
                  <a href="https://github.com/riyadhossain565" target="_blank">
                    <FaGithub />
                  </a>
                </div>
                <div className="p-2 border border-[#C47623] hover:bg-[#C47623] text-lg text-[#C47623] hover:text-white rounded-full cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/riyad-hossain-996515164/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="p-2 border border-[#C47623] hover:bg-[#C47623] text-lg text-[#C47623] hover:text-white rounded-full cursor-pointer">
                  <a
                    href="https://www.facebook.com/riad.hossain.01/"
                    target="_blank"
                  >
                    <FaFacebook />
                  </a>
                </div>
                <div className="p-2 border border-[#C47623] hover:bg-[#C47623] text-lg text-[#C47623] hover:text-white rounded-full cursor-pointer">
                  <a href="https://x.com/Riadhos58623033" target="_blank">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
