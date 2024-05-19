import { GameProvider } from './context/GameContext';
import Game from './components/Game/Game';

const App = () => {
  return (
    <GameProvider>
      <div className="app">
        <h1>Chess Game</h1>
        <Game />
      </div>
    </GameProvider>
  );
};

export default App;