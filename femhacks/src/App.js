import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';
import Pomodoro from './Pomodoro';

function App() {
  return (
      <div className="App">
        <h1>Goalfish</h1>
        <TaskList />
        <Pomodoro />
      </div>
  );
}


export default App;
