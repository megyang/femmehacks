import React, {useState, useEffect} from 'react';
import './styles/Pomodoro.css';

const Pomodoro = () => {
    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [mode, setMode] = useState('pomodoro');
    const [timerEnded, setTimerEnded] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);
        } else {
            clearInterval(interval);
            if (hasStarted) { // Check if timer has started
                setTimerEnded(true); // Set timerEnded to true when timer ends
            }
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    const resetHeaderText = () => {
        setTimerEnded(false);
    };

    const toggleTimer = () => {
        setIsActive(!isActive);
        if (!hasStarted) {
            setHasStarted(true);
        }
    };

    const resetTimer = () => {
        setIsActive(false);
        setHasStarted(false);
        switch (mode) {
            case 'pomodoro':
                setTime(25 * 60);
                break;
            case 'shortBreak':
                setTime(.1 * 60);
                break;
            case 'longBreak':
                setTime(10 * 60);
                break;
            default:
                setTime(25 * 60);
        }
    };

    const switchMode = (newMode) => {
        setMode(newMode);
        setIsActive(false);
        setHasStarted(false);
        switch (newMode) {
            case 'pomodoro':
                setTime(25 * 60);
                break;
            case 'shortBreak':
                setTime(.1 * 60);
                break;
            case 'longBreak':
                setTime(10 * 60);
                break;
            default:
                setTime(25 * 60);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    const backgroundClasses = {
        pomodoro: 'pomodoro-bg',
        shortBreak: 'short-break-bg',
        longBreak: 'long-break-bg',
    };

    return (
        <div className={`pomodoro ${backgroundClasses[mode]}`}>
            <div id="water-canvas" className="water-canvas">
                <div className="ripple-container">
                    <div className="ripple"></div>
                    <div className="ripple"></div>
                    <div className="ripple"></div>
                    <div className="ripple"></div>
                    <div className="ripple"></div>
                </div>
            </div>
            {timerEnded ? (
                <h1>You did it!</h1>
            ) : (
                <h1>&lt;Pomodoro Timer&gt;</h1>
            )}
            <div className="timer">
                {hasStarted ? formatTime(time) : (mode === 'pomodoro' ? "25:00" : mode === 'shortBreak' ? "5:00" : "10:00")}
            </div>
            {/* Fish elements */}
            <div className="fish fish1">
                <div className="fish-body">
                    <div className="eye">
                        <div className="pupil"></div>
                    </div>
                </div>
                <div className="fin"></div>
                <div className="fin fin-bottom"></div>
            </div>
            <div className="fish fish2">
                <div className="fish-body">
                    <div className="eye">
                        <div className="pupil"></div>
                    </div>
                </div>
                <div className="fin"></div>
                <div className="fin fin-bottom"></div>
            </div>
            <div className="fish fish3">
                <div className="fish-body">
                    <div className="eye">
                        <div className="pupil"></div>
                    </div>
                </div>
                <div className="fin"></div>
                <div className="fin fin-bottom"></div>
            </div>
            <div className="fish fish4">
                <div className="fish-body">
                    <div className="eye">
                        <div className="pupil"></div>
                    </div>
                </div>
                <div className="fin"></div>
                <div className="fin fin-bottom"></div>
            </div>
            <div className="fish fish5">
                <div className="fish-body">
                    <div className="eye">
                        <div className="pupil"></div>
                    </div>
                </div>
                <div className="fin"></div>
                <div className="fin fin-bottom"></div>
            </div>
            <div className="button-container">
                <button onClick={() => { toggleTimer(); resetHeaderText(); }}>{isActive ? 'Pause' : 'Start'}</button>
                <button onClick={() => { resetTimer(); resetHeaderText(); }}>Reset</button>
            </div>
            <div className="mode-container">
                <button onClick={() => { switchMode('pomodoro'); resetHeaderText(); }}>Pomodoro Timer</button>
                <button onClick={() => { switchMode('shortBreak'); resetHeaderText(); }}>Short Break</button>
                <button onClick={() => { switchMode('longBreak'); resetHeaderText(); }}>Long Break</button>
            </div>
        </div>
    );
};

export default Pomodoro;
