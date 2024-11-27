import {useEffect, useState} from "react";

export default function Editor({running, setTime, defaultTime, setDefaultTime}: { running: boolean, setTime: (time: number) => void, defaultTime: number, setDefaultTime: (time: number) => void }) {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setDefaultTime(60 * minutes + seconds);
    }, [minutes, seconds]);
    return <div className={"ui editor" + (running ? " invisible" : "")}>
        <span id={"title"}>timed</span>
        <span className={"editor-row"}>
            <input type={"number"} pattern={"[0-9]*"}
                   className={"input"}
                   onChange={e => setMinutes(Number.parseInt(e.target.value))}
                   placeholder={"minutes"}/>
            :
            <input type={"number"} pattern={"[0-9]*"}
                   className={"input"}
                   onChange={e => setSeconds(Number.parseInt(e.target.value))}
                   placeholder={"seconds"}/>
            <button className={"btn"} onClick={() => setTime(defaultTime)}>Reset</button>
        </span>


    </div>;
}