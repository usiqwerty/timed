export default function DummyLine({running}: { running: boolean }) {
    return <div className={"ui editor" + (running ? " invisible" : "")}>
        Tap the clock to start, tap again to pause
    </div>;
}