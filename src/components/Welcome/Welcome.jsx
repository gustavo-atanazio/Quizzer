import './Welcome.css';
import data from '../../data/questions';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div>
            <h2>Bem vindo!</h2>
            <p>Escolha um dos temas abaixo para começar</p>
            <div className="buttons">
                {data.map(question => (
                    <button key={question.category} onClick={() => dispatch({type: "CHANGE_STATE"})}>
                        {question.category}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Welcome;