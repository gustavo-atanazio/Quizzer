import './App.css';

import { useContext } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome/Welcome';
import Choose from './components/Choose/Choose';
import Questions from './components/Questions/Questions';
import GameOver from './components/GameOver/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='App'>
      <h1>Quizzer</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Choosing" && <Choose/>}
      {quizState.gameStage === "Playing" && <Questions/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App;