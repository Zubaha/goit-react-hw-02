import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  const [grade, setGrade] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("gradeValue")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("gradeValue", JSON.stringify(grade));
  }, [grade]);

  const total = grade.good + grade.neutral + grade.bad;
  const positive = total > 0 ? Math.round((grade.good / total) * 100) : 0;

  const addGrade = (gradeName) => {
    if (gradeName === "reset") {
      setGrade({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else {
      setGrade({ ...grade, [gradeName]: grade[gradeName] + 1 });
    }
  };
  return (
    <>
      <Description />

      <Options addGrade={addGrade} />
      <Feedback
        good={grade.good}
        neutral={grade.neutral}
        bad={grade.bad}
        total={total}
        positive={positive}
      />
    </>
  );
};

export default App;
