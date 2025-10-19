import { useState } from "react";
import questions from "../../../../public/assets/questions.json";
import { Scores } from "@/app/sorting-quiz/page";

interface QuizProps {
  addScores: (scores: Partial<Scores>) => void,
  onComplete: () => void,
}

const Quiz: React.FC<QuizProps> = ({addScores, onComplete}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | undefined>();
  
  const { question, options } = questions[questionIndex];
  

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedOptionIndex(Number(event.target.value));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (selectedOptionIndex === undefined) return;
    addScores(options[selectedOptionIndex].scores);
    if (questionIndex == questions.length-1) {
      onComplete();
      return;
    }
    setQuestionIndex(questionIndex+1);
    setSelectedOptionIndex(undefined);
  }

  return (
    <section>
      <p>Question {questionIndex+1} of {questions.length}</p>
      <p>{question}</p>
      <form onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <label key={option.text}>
            <input type="radio" name="question" value={index} checked={index === selectedOptionIndex} onChange={handleChange} />
            {option.text}
          </label>
        ))}
        <button type="submit">Select</button>
      </form>
    </section>
  )
}

export default Quiz;