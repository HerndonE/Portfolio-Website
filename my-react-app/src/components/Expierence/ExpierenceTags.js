import "../../App.css";
import React, { useEffect, useRef, useMemo } from "react";

function ExperienceTags({ AllTags, IndexOfAllTags }) {
  const tags = useMemo(() => {
    return IndexOfAllTags >= 0 && IndexOfAllTags < AllTags?.length
      ? AllTags[IndexOfAllTags] || []
      : [];
  }, [AllTags, IndexOfAllTags]);

  const hasLogged = useRef(false);

  useEffect(() => {
    if (tags.length > 7 && !hasLogged.current) {
      console.log("The list of tags is longer than 7:", tags);
      tags.push("+");
      hasLogged.current = true;
      //TOD: Add clickable button object to print more tags. Delete button after
    }
  }, [tags]);

  if (tags.length === 0) {
    return <div>No tags available for this project.</div>;
  }

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

export default ExperienceTags;
