import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';
import Pomodoro from './Pomodoro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/pomodoro" element={<Pomodoro />} />
            </Routes>
        </Router>
    );
}


export default App;
