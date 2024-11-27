import {useEffect, useState} from "react";

export function TimerWidget({running, setRunningState, time, setTime}: {
    running: boolean,
    setRunningState: (state: boolean) => void,
    time: number,
    setTime: (timeSelector: any) => void
}) {

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (running) {
            timer = setInterval(() => {
                setTime((time : number) => time + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [running]);


    const seconds = time % 60;
    const minutes = Math.trunc(time / 60);


    return <div className={"timer"} onClick={() => setRunningState(!running)}>
        <span className={"timer-value"}>
            {minutes}:{seconds >= 10 ? seconds : "0" + seconds}
        </span>
    </div>
}

export default TimerWidget;