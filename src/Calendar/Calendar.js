import './Calendar.css'

export const Calendar = () => {
    const daysOfWeek = [
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thur",
        "Fri",
        "Sat"
    ]
    const days = Array.from({length: 30}, (x, i) => i + 1)
    const appendedCells = Array.from({length: 5}, (x, i) => i + 1)

    return (
        <>
            <div className="month-header">
                dec
            </div>
            <div className="month-container Rtable Rtable--7cols">
                {
                    daysOfWeek.map((x, idx) => <div key={idx} className="day-of-week Rtable-cell">{x}</div>)
                }
                {
                    days.map((x, idx) => <DayCell key={idx + 7} day={x}></DayCell>)
                }
                {
                    appendedCells.map((x, idx) => <div key={idx + 37} className="Rtable-cell day-cell"></div>)
                }
            </div>
        </>
    );
};


const DayCell = ( { day } ) => {
    return (
        <div className="Rtable-cell day-cell">
            <div className="day-number">
                <span>{day}</span>
            </div>
            <div className="day-content">
                
            </div>
        </div>
    )
}