import "../../App.css";

function ProjectTags({ AllTags, IndexOfAllTags }) {
  // Validate index
  if (IndexOfAllTags < 0 || IndexOfAllTags >= AllTags?.length) {
    return <div>No tags available for this project.</div>;
  }

  // Get projects tags for the given index
  const tags = AllTags[IndexOfAllTags] || [];

  console.log(tags);
  return (
    <div className="tags">
      {tags.map((tag, index) => {
        return (
          <div key={tag + index} className="tag">
            {tag}
          </div>
        );
      })}
    </div>
  );
}

export default ProjectTags;
