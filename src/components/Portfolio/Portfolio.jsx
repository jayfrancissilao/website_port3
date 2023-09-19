import Projects from "/src/Data/project.json";
const Portfolio = () => {
  return (
    <div className="mt-20">
      {Projects.map((projects) => {
        return (
          <div key={projects.id}>
            <h3>{projects.name}</h3>
            <p>{projects.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
