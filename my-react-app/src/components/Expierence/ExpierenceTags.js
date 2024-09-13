import "../../App.css";
import React, { useMemo, useState } from "react";

function ExperienceTags({ AllTags, IndexOfAllTags }) {
  const [showMore, setShowMore] = useState(false);
  const tags = useMemo(() => {
    if (IndexOfAllTags >= 0 && IndexOfAllTags < AllTags?.length) {
      return AllTags[IndexOfAllTags] || [];
    }
    return [];
  }, [AllTags, IndexOfAllTags]);

  const displayedTags = useMemo(() => {
    // Show more tags based on the showMore state
    const tagsToDisplay = showMore ? tags : tags.slice(0, 7);
    return tagsToDisplay;
  }, [tags, showMore]);

  const handleShowMore = () => {
    setShowMore(true);
  };

  if (tags.length === 0) {
    return <div>No tags available for this project.</div>;
  }

  return (
    // TODO: Adjust tag class to go to a new line if there is more than X in one row
    <div className="tags">
      {displayedTags.map((tag, index) => {
        return (
          <div key={tag + index} className="tag">
            {tag}
          </div>
        );
      })}
      {tags.length > 7 && !showMore && (
        <button onClick={handleShowMore} className="show-more-button">
          Click for More Tags
        </button>
      )}
    </div>
  );
}

export default ExperienceTags;
