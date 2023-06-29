import './GameOver.css';
import endgame from '../../img/endgame.svg';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className='game-over'>
            <h2>Fim de jogo!</h2>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas</p>
            <img src={endgame} alt="Fim de jogo"/>
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Jogar de novo</button>
        </div>
    )
}

export default GameOver;