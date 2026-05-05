import "../../App.css";

function Expierence({ AllExpierences, IndexOfAllExpierences }) {
  // Validate index
  if (
    IndexOfAllExpierences < 0 ||
    IndexOfAllExpierences >= AllExpierences?.length
  ) {
    return <div>No expierence available for this index.</div>;
  }

  // Get expierence for the given index
  const expierences = AllExpierences[IndexOfAllExpierences] || [];

  return (
    <ul>
      {expierences.map((expierence, index) => (
        <li key={expierence + index}>{expierence}</li>
      ))}
    </ul>
  );
}

export default Expierence;
