import DataSkills from "/src/Data/skills.json";
import Figma from "/src/assets/SkillsPicture/figma.png";
import Javascript from "/src/assets/SkillsPicture/javascript.png";
import ReactJs from "/src/assets/SkillsPicture/react.png";
import AdobeXd from "/src/assets/SkillsPicture/adobeXd.png";

const Skills = () => {
  // for displaying the image
  const images = [Figma, Javascript, ReactJs, AdobeXd];
  return (
    <div className="lg:mx-12 mx-4 py-32">
      {/* skills header */}
      <div className="text-headingColor mb-20">
        <p className="text-xl font-semibold mb-5">My Skills</p>
        <h2 className="md:text-5xl text-4xl font-bold">My Expertise</h2>
      </div>
      {/* skills cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {DataSkills.map((tech, i) => {
          return (
            <div key={tech.id}>
              <img src={images[i]} alt="" />
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
