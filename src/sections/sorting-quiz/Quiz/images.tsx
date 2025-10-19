import Question1 from "../../../../public/assets/question1.svg";
import Question2 from "../../../../public/assets/question2.svg";
import Question3 from "../../../../public/assets/question3.svg";
import Question4 from "../../../../public/assets/question4.svg";
import Question5 from "../../../../public/assets/question5.svg";
import Question6 from "../../../../public/assets/question6.svg";
import Question7 from "../../../../public/assets/question7.svg";
import Question8 from "../../../../public/assets/question8.svg";
import Question9 from "../../../../public/assets/question9.svg";
import Question10 from "../../../../public/assets/question10.svg";
import Question11 from "../../../../public/assets/question11.svg";
import Question12 from "../../../../public/assets/question12.svg";
import Question13 from "../../../../public/assets/question13.svg";
import Question14 from "../../../../public/assets/question14.svg";
import Question15 from "../../../../public/assets/question15.svg";

const images = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11, Question12, Question13, Question14, Question15];

interface QuizImageProps {
  index: number,
  className?: string,
}

const QuizImage: React.FC<QuizImageProps> = ({index, className = ''}) => {
  const Image = images[index];
  return <Image alt={`Question ${index+1} image`} className={className} />
}

export default QuizImage;