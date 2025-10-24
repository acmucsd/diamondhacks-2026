import { useState } from 'react';
import { Scores } from '@/app/sorting-quiz/page';
import Typography from '@/components/Typography';
import styles from './style.module.scss';
import React from 'react';

interface Option {
  text: string;
  scores: Partial<Scores>;
}

interface OptionPickerProps {
  options: Option[];
  onSubmit: (scores: Partial<Scores>) => void;
}

const OptionPicker: React.FC<OptionPickerProps> = ({ options, onSubmit }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | undefined>();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedOptionIndex(Number(event.target.value));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (selectedOptionIndex === undefined) return;
    onSubmit(options[selectedOptionIndex].scores);
    setSelectedOptionIndex(undefined);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {options.map((option, index) => (
        <React.Fragment key={option.text}>
          <input
            type="radio"
            name="question"
            value={index}
            checked={index === selectedOptionIndex}
            onChange={handleChange}
            id={option.text}
          />
          <label htmlFor={option.text} className={styles.button}>
            <Typography variant="body/medium">{option.text}</Typography>
          </label>
        </React.Fragment>
      ))}
      <button type="submit" className={styles.submitButton}>
        <Typography variant="body/medium">Select</Typography>
      </button>
    </form>
  );
};

export default OptionPicker;
