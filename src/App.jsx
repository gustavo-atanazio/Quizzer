import './App.css';
import { useContext } from 'react';
import { QuizContext } from './context/quiz';
import Welcome from './components/Welcome/Welcome';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='App'>
      <h1>Quizzer</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
    </div>
  )
}

export default App;