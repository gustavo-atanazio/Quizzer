import './App.css';

import { useContext } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome/Welcome';
import Questions from './components/Questions/Questions';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='App'>
      <h1>Quizzer</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Questions/>}
    </div>
  )
}

export default App;