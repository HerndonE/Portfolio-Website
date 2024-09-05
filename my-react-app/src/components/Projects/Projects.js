import "../../App.css";

function Projects({ AllProjects, IndexOfAllProjects }) {
  // Validate index
  if (IndexOfAllProjects < 0 || IndexOfAllProjects >= AllProjects?.length) {
    return <div>No expierence available for this index.</div>;
  }

  // Get projects for the given index
  const projects = AllProjects[IndexOfAllProjects] || [];

  console.log(projects);
  return (
    <div className="ul">
      {projects.map((project, index) => {
        return (
          <div key={project + index} className="li">
            {project}
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
