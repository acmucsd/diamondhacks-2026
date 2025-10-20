import { useState } from 'react';
import questions from '../../../../public/assets/questions.json';
import { Scores } from '@/app/sorting-quiz/page';
import Typography from '@/components/Typography';
import styles from './style.module.scss';
import DynamicSVG from '@/components/sorting-quiz/DynamicSvg';
import OptionPicker from '@/components/sorting-quiz/OptionPicker';

interface QuizProps {
  addScores: (scores: Partial<Scores>) => void;
  onComplete: () => void;
}

const Quiz: React.FC<QuizProps> = ({ addScores, onComplete }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const { question, options } = questions[questionIndex];
  
  function handleSubmit(scores: Partial<Scores>) {
    if (questionIndex == questions.length - 1) {
      onComplete();
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  }

  return (
    <div className={styles.container}>
      <Typography variant="body/medium">
        Question {questionIndex + 1} of {questions.length}
      </Typography>
      <Typography variant="label/large">{question}</Typography>
      <div className={styles.imageContainer}>
        <DynamicSVG name={`question${questionIndex + 1}`} alt={`Question ${questionIndex + 1} image`} className={styles.image} />
      </div>
      <OptionPicker options={options} onSubmit={handleSubmit} />
    </div>
  );
};

export default Quiz;
