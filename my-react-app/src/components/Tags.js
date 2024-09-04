import "../App.css";

function Tags({ AllTags, IndexOfAllTags }) {
  // Validate index
  if (IndexOfAllTags < 0 || IndexOfAllTags >= AllTags?.length) {
    return <div>No tags available for this index.</div>;
  }

  // Get tags for the given index
  const tags = AllTags[IndexOfAllTags] || [];

  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tags;
