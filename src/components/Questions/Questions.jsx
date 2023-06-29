import './Questions.css';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import Option from '../Option/Option';

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const question = quizState.questions[quizState.currentQuestion];

  function onSelectOption(option) {
    console.log(option);
    dispatch({type: "CHECK_ANSWER", payload: {answer: question.answer, option}})
  }

  return (
    <div className='questions'>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h3>{question.question}</h3>

      <div className="options-container">
        {question.options.map(option => (
          <Option 
            option={option}
            key={option}
            answer={question.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      
      {quizState.answerSelected && (
        <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
      )}
    </div>
  )
}

export default Questions;