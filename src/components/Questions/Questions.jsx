import './Questions.css';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div>
      <p>{quizState.question}</p>
    </div>
  )
}

export default Questions;