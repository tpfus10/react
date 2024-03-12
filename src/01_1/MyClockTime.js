function MyClockTime() {
    const currentTime = new Date();

    return (
        <h2 className="Myh2">
            현재 시각 : {currentTime.toLocaleTimeString()}
        </h2>
    );
}

export default MyClockTime;