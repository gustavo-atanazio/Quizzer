import './Choose.css';

import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const Choose = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    function chooseCategoryAndReorderQuestions(category) {
        dispatch({type: "START_GAME", payload: category})

        dispatch({type: "REORDER_QUESTIONS"})
    }

    return (
        <div>
            <p>Escolha um dos temas abaixo</p>
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

export default Choose;