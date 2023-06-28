import './Welcome.css';
import questions from '../../data/questions';

const Welcome = () => {
  return (
    <div>
        <h2>Bem vindo!</h2>
        <p>Escolha um dos temas abaixo para começar</p>
        <div className="buttons">
            {questions.map(question => (
                <button key={question.category}>{question.category}</button>
            ))}
        </div>
    </div>
  )
}

export default Welcome;