import './Welcome.css';
import questions from '../../data/questions';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div>
            <h2>Bem vindo!</h2>
            <p>Escolha um dos temas abaixo para começar</p>
            <div className="buttons">
                {questions.map(question => (
                    <button key={question.category} onClick={() => dispatch({type: "CHANGE_STATE"})}>
                        {question.category}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Welcome;