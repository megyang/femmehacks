import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './TaskList';
import Pomodoro from './Pomodoro';
import AboutUs from './AboutUs';

import './App.css';
import NavBar from './NavBar';

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/pomodoro" element={<Pomodoro />} />
                    <Route path="/about" element={<AboutUs />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
