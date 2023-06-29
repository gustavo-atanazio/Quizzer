import './Option.css';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

const Option = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div>Option</div>
    )
}

export default Option;