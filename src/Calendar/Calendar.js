import React from 'react'
import './Calendar.css'
import { 
    getMonthOffsets, 
    getNumberOfDaysForMonth, 
    addMonth } from '../lib/date-helpers'
import { IonIcon } from '@ionic/react'
import {
	chevronBackOutline,
	chevronForwardOutline,
} from 'ionicons/icons'

const daysOfWeek = [
    "Sun",
    "Mon",
    "Tues",
    "Wed",
    "Thur",
    "Fri",
    "Sat"
]

const monthsInYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

export const Calendar = () => {
    const today = new Date();
    return (
        <Month date={ today }></Month>
    );
};

const Month = ({ date }) => {
    const [dateStore, setDateStore] = React.useState(date)

    const changeMonth = (monthChange)  => {
        setDateStore(addMonth(dateStore, monthChange))
    }
    
    const monthOffsets = getMonthOffsets(dateStore.getFullYear(), dateStore.getMonth() + 1);
    const numberOfDaysInMonth = getNumberOfDaysForMonth(dateStore.getFullYear(), dateStore.getMonth() + 1)

    const days = Array.from({length: numberOfDaysInMonth}, (x, i) => i + 1)
    const prependedCells = Array.from({length: monthOffsets.prepend}, (x, i) => i + 1)
    const appendedCells = Array.from({length: monthOffsets.append}, (x, i) => i + 1)

    return (
        <>
            <div className="date-controls">
                <div className="control-arrow">
                    <IonIcon onClick={ () => changeMonth(-1) } className="month-navigate-btn" icon={chevronBackOutline}></IonIcon>
                </div>
                <div className="date-header">
                    <div className="month-header">{ monthsInYear[dateStore.getMonth()] }</div>
                    <div className="year-header">{ dateStore.getFullYear() }</div>
                </div>
                <div className="control-arrow">
                    <IonIcon onClick={ () => changeMonth(1) } className="month-navigate-btn" icon={chevronForwardOutline}></IonIcon>    
                </div>
            </div>
            <div className="month-container Rtable Rtable--7cols">
                {
                    daysOfWeek.map((x, idx) => <div key={idx} className="day-of-week Rtable-cell">{x}</div>)
                }
                {
                    prependedCells.map((x, idx) => <div key={idx + 7} className="Rtable-cell day-cell"></div>)
                }
                {
                    days.map((x, idx) => <DayCell key={idx + 7 + monthOffsets.prepend} day={x}></DayCell>)
                }
                {
                    appendedCells.map((x, idx) => <div key={idx + 7 + monthOffsets.prepend + days.length} className="Rtable-cell day-cell"></div>)
                }
            </div>
        </>
    );
}

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
