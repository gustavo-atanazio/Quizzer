import './Welcome.css';
import welcome from '../../img/welcome.svg';

import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className="welcome">
            <h2>Bem vindo!</h2>
            <p>Pronto para começar?</p>
            <img src={welcome} alt="Amigos reunidos"/>
            <button onClick={() => dispatch({type: "CHANGE_STAGE"})}>Começar</button>
        </div>
    )
}

export default Welcome;