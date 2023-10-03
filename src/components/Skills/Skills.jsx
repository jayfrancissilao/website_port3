import DataSkills from "/src/Data/skills.json";
import Figma from "/src/assets/SkillsPicture/figma.png";
import Javascript from "/src/assets/SkillsPicture/javascript.png";
import ReactJs from "/src/assets/SkillsPicture/react.png";
import Photoshop from "/src/assets/SkillsPicture/photoshop.png";
import Tailwind from "/src/assets/SkillsPicture/tailwind.png";
import AdobePr from "/src/assets/SkillsPicture/adobePro.png";
import Git from "/src/assets/SkillsPicture/git.png";
import Github from "/src/assets/SkillsPicture/github.png";
import "/src/App.css";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "/src/variants";

const Skills = () => {
  // for displaying the image
  const images = [
    Figma,
    Javascript,
    ReactJs,
    Tailwind,
    Photoshop,
    AdobePr,
    Git,
    Github,
  ];
  return (
    <div className="lg:mx-12 mx-4 py-32" id="skills">
      {/* skills header */}
      <div className="text-headingColor mb-20">
        <p className="text-xl font-semibold mb-5">My Skills</p>
        <h2 className="md:text-5xl text-4xl font-bold">My Basic Knowledge</h2>
      </div>
      {/* skills cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {DataSkills.map((tech, i) => {
          return (
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={tech.id}
              className="bg-bgShade  p-8 rounded-lg cursor-pointer  hover:-translate-y-4 transition-all duration-300 border-bottom-css"
            >
              <img
                src={images[i]}
                alt=""
                className="w-14 h-14 bg-white rounded-lg shadow-md mb-7 p-3 "
              />
              <h3 className="text-2xl font-bold mb-4">{tech.name}</h3>
              <p>{tech.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
