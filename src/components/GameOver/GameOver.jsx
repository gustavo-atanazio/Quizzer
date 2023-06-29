import './GameOver.css';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className='game-over'>
            <h2>Fim de jogo!</h2>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas</p>
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Jogar de novo</button>
        </div>
    )
}

export default GameOver;