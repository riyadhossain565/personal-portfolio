import React from "react";
import Container from "../shared/Container";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-900">
      <Container>
        <h2 className="text-5xl font-bold text-center text-[#C47623] mb-14">
         👨‍🎓 Educational Qualification
        </h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {/* Degree 1 */}
          <div className="bg-[#352323] hover:bg-[#C47623] hover:text-white transition-all shadow-md rounded-lg p-6 border-l-4 border-[#C47623]">
            <h3 className="text-xl font-semibold ">Bachelor of Science(BSc)</h3>
            <p className="">National University</p>
            <span className="mt-2 font-bold">2017 - 2021</span>
          </div>

          {/* Degree 2 */}
          <div className="bg-[#352323] hover:bg-[#C47623] hover:text-white transition-all shadow-md rounded-lg p-6 border-l-4 border-[#C47623]">
            <h3 className="text-xl font-semibold ">
              Higher Secondary Certificate (HSC)
            </h3>
            <p>Nawab Habibullah Model College</p>
            
              <span className="mt-2 font-bold">2014 - 2016</span>
            
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Education;
