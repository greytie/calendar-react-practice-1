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
        <div className="month-container Rtable Rtable--7cols">
            {
                daysOfWeek.map((x, idx) => <div key={idx} className="Rtable-cell">{x}</div>)
            }
            {
                days.map((x, idx) => <div key={idx + 7} className="Rtable-cell">{x}</div>)
            }
            {
                appendedCells.map((x, idx) => <div key={idx + 37} className="Rtable-cell"></div>)
            }
        </div>
    );
};