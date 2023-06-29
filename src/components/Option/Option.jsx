import './Option.css';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const Option = ({ option, answer, selectOption }) => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div 
            className={`option ${quizState.answerSelected && option === answer ? 'correct' : 'wrong'}
            ${quizState.answerSelected && option !== answer ? 'wrong' : ''}`}

            onClick={() => selectOption()}
        >
            <p>{option}</p>
        </div>
    )
}

export default Option;