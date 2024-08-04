const Options = ({ addGrade, total }) => {
  return (
    <div>
      <button type="button" onClick={() => addGrade("good")}>
        Good
      </button>
      <button type="button" onClick={() => addGrade("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => addGrade("bad")}>
        Bad
      </button>
      {total === 0 ? (
        ""
      ) : (
        <button type="button" onClick={() => addGrade("reset")}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
