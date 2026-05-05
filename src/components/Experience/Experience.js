import "../../App.scss";

function Experience({ AllExperiences, IndexOfAllExperiences }) {
  // Validate index
  if (
    IndexOfAllExperiences < 0 ||
    IndexOfAllExperiences >= AllExperiences?.length
  ) {
    return <div>No experience available for this index.</div>;
  }

  // Get experience for the given index
  const experiences = AllExperiences[IndexOfAllExperiences] || [];

  return (
    <ul>
      {experiences.map((experience, index) => (
        <li key={experience + index}>{experience}</li>
      ))}
    </ul>
  );
}

export default Experience;
