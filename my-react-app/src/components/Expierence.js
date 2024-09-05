import "../App.css";

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

  console.log(expierences);
  return (
    <div className="ul">
      {expierences.map((expierence, index) => {
        return (
          <li>
            <div key={expierence + index} className="li">
              {expierence}
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default Expierence;
