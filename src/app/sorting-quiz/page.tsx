"use client"
import Landing from "@/sections/sorting-quiz/Landing";
import Quiz from "@/sections/sorting-quiz/Quiz";
import Result from "@/sections/sorting-quiz/Result";
import { useState } from "react"

enum Section {
  Landing,
  Quiz,
  Result,
}

export type House = 'G' | 'R' | 'S' | 'T';

export type Scores = {
  [key in House]: number;
}

function getHouse(scores: Scores): House {
  const maxScore = Math.max(...Object.values(scores));
  if (scores.G === maxScore) return 'G';
  if (scores.R === maxScore) return 'R';
  if (scores.S === maxScore) return 'S';
  return 'T';
}

export default function SortingQuiz() {
  const [section, setSection] = useState(Section.Landing);
  const [scores, setScores] = useState<Scores>({G: 0, R: 0, S: 0, T: 0});

  function addScores(scoresToAdd: Partial<Scores>) {
    setScores({
      G: scores.G + (scoresToAdd.G ?? 0),
      R: scores.R + (scoresToAdd.R ?? 0),
      S: scores.S + (scoresToAdd.S ?? 0),
      T: scores.T + (scoresToAdd.T ?? 0),
    });
  }

  let sectionElement;
  switch (section) {
    default:
    case Section.Landing:
      sectionElement = <Landing onClick={() => setSection(Section.Quiz)} />;
      break;
    case Section.Quiz:
      sectionElement = <Quiz addScores={addScores} onComplete={() => setSection(Section.Result)} />;
      break;
    case Section.Result:
      sectionElement = <Result house={getHouse(scores)} />;
      break;
  }

  return (
    <main>
      {sectionElement}
    </main>
  );
}