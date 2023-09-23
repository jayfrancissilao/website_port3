import Projects from "/src/Data/project.json";
import Project1 from "/src/assets/ProjectPicture/projectq.png";
import Project2 from "/src/assets/ProjectPicture/projectq.png";
import Project3 from "/src/assets/ProjectPicture/projectq.png";

const Portfolio = () => {
  // for Projects Images
  const images = [Project1, Project2, Project3];
  return (
    <div className="lg:mx-12 mx-4 my-32" id="portfolio">
      {/* Portfolio left side */}
      <div className="flex flex-col md:flex-row justify-between mb-20 gap-8 md:items-center">
        <div className="text-headingColor">
          <p className="text-xl font-semibold mb-5">My Projects</p>
          <h2 className="md:text-5xl text-4xl font-bold">My Portfolio</h2>
        </div>
      </div>

      {/* Portfolio Project right side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Projects.map((projects, i) => {
          return (
            <div
              key={projects.id}
              className="shadow-xl rounded-lg cursor-pointer"
            >
              <img
                src={images[i]}
                alt=""
                className="hover:scale-90 transition-all duration-300"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2 text-headingColor">
                  {projects.name}
                </h3>
                <p className="text-body mb-4">{projects.description}</p>
                <a
                  href=""
                  className="underline underline-offset-8 hover:text-primary"
                >
                  View in Github
                  <img
                    src="/src/assets/img/arrow.png"
                    alt=""
                    className="w-3 inline-block ml-3"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
