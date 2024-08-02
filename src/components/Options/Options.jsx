const Options = ({ addGrade }) => {
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
      <button type="button" onClick={() => addGrade("reset")}>
        Reset
      </button>
    </div>
  );
};

export default Options;
