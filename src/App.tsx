import React, {useState} from 'react';
import './App.css';
import TimerWidget from "./widgets/TimerWidget";
import Editor from "./widgets/Editor";
import DummyLine from "./widgets/DummyLine";

function App() {
    const [running, setRunning] = useState(false);
    const [defaultTime, setDefaultTime] = useState(0);
    const [time, setTime] = useState(defaultTime);

    return (
        <div className="App">
            <Editor running={running} setTime={setTime} defaultTime={defaultTime} setDefaultTime={setDefaultTime}/>
            <TimerWidget running={running} setRunningState={setRunning} time={time} setTime={setTime}/>
            <DummyLine running={running}/>
        </div>
    );
}

export default App;
