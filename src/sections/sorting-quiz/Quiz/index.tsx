import { useState } from "react";
import questions from "../../../../public/assets/questions.json";
import { Scores } from "@/app/sorting-quiz/page";
import Typography from "@/components/Typography";
import styles from "./style.module.scss";
import QuizImage from "./images";

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
    <section className={styles.container}>
      <Typography variant="body/medium">Question {questionIndex+1} of {questions.length}</Typography>
      <Typography variant="label/large">{question}</Typography>
      <div className={styles.imageContainer}>
        <QuizImage index={questionIndex} className={styles.image} />
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        {options.map((option, index) => (
          <>
            <input type="radio" name="question" value={index} checked={index === selectedOptionIndex} onChange={handleChange} id={option.text} />
            <label key={option.text} htmlFor={option.text} className={styles.button}>
              <Typography variant="body/medium">{option.text}</Typography>
            </label>
          </>
        ))}
        <button type="submit" className={styles.submitButton}><Typography variant="body/medium">Select</Typography></button>
      </form>
    </section>
  )
}

export default Quiz;