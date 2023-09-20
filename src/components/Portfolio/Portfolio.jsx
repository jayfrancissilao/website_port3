import Projects from "/src/Data/project.json";
import Project1 from "/src/assets/ProjectPicture/projectq.png";
const Portfolio = () => {
  // for Projects Images
  const images = [Project1];
  return (
    <div className="lg:mx-12 mx-4 my-32">
      {/* Portfolio left side */}
      <div className="flex flex-col md:flex-row justify-between mb-20 gap-8 md:items-center">
        <div className="text-headingColor">
          <p className="text-xl font-semibold mb-5">My Projects</p>
          <h2 className="md:text-5xl text-4xl font-bold">My Portfolio</h2>
        </div>
      </div>

      {/* Portfolio Project right side */}
      <div>
        {Projects.map((projects) => {
          return (
            <div key={projects.id}>
              <h2>{projects.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
