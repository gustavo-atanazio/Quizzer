import './Questions.css';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const question = quizState.questions[quizState.currentQuestion].question;

  return (
    <div className='questions'>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h3>{question}</h3>

      <div className="options-container">
        <span>Opções</span>
      </div>

      <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
    </div>
  )
}

export default Questions;