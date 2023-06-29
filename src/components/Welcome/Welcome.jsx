import './Welcome.css';

import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    function chooseCategoryAndReorderQuestions(category) {
        dispatch({type: "START_GAME", payload: category})

        dispatch({type: "REORDER_QUESTIONS"})
    }

    return (
        <div>
            <h2>Bem vindo!</h2>
            <p>Escolha um dos temas abaixo para começar</p>
            <div className="buttons">
                {quizState.questions.map(question => (
                    <button key={question.category} onClick={() => chooseCategoryAndReorderQuestions(question.category)}>
                        {question.category}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Welcome;