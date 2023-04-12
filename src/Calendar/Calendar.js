import React from 'react'
import './Calendar.css'
import { 
    getMonthOffsets, 
    getNumberOfDaysForMonth, 
    getDatesInRange, 
    addDays, 
    addMonth } from '../lib/date-helpers'
import { IonIcon } from '@ionic/react'
import {
	chevronBackOutline,
	chevronForwardOutline,
} from 'ionicons/icons'
import { isSunday } from 'date-fns'

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

const Month = ({ date: initalDate }) => {
    const [currentDate, setDateStore] = React.useState(initalDate)

    const changeMonth = (monthChange)  => {
        setDateStore(addMonth(currentDate, monthChange))
    }
    
    const { prepend, append } = getMonthOffsets(currentDate.getFullYear(), currentDate.getMonth() + 1);
    const numberOfDaysInMonth = getNumberOfDaysForMonth(currentDate.getFullYear(), currentDate.getMonth() + 1)

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)

    // Get days for previous month
    const prevMonthDates = getDatesInRange(addDays(firstDayOfMonth, -prepend), prepend)
    const currentMonthDates = getDatesInRange(firstDayOfMonth, numberOfDaysInMonth)
    const nextMonthDates = getDatesInRange(addDays(firstDayOfMonth, numberOfDaysInMonth), append)
    const allDays = [...prevMonthDates, ...currentMonthDates, ...nextMonthDates]

    return (
        <>
            <div className="date-controls">
                <div className="control-arrow">
                    <IonIcon onClick={ () => changeMonth(-1) } className="month-navigate-btn" icon={chevronBackOutline}></IonIcon>
                </div>
                <div className="date-header">
                    <div className="month-header">{ monthsInYear[currentDate.getMonth()] }</div>
                    <div className="year-header">{ currentDate.getFullYear() }</div>
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
                    allDays.map((date, idx) => <DayCell key={idx + 7} date={date} currentMonthIndex={ currentDate.getMonth() }></DayCell>)
                }
            </div>
        </>
    );
}

/**
 * 
 * @param {{ date: Date }}} param0 
 * @returns 
 */
const DayCell = ( { date, currentMonthIndex } ) => {
    const isCurrentMonth = date.getMonth() === currentMonthIndex;
    const isDateSunday = isSunday(date);

    return (
        <div className="Rtable-cell day-cell">
            <div className={`day-number ${getDateColor(isCurrentMonth, isDateSunday)}`}>
                <span>{date.getDate()}</span>
            </div>
            <div className="day-content">
                
            </div>
        </div>
    )
}

const getDateColor = (isCurrentMonth, isDateSunday) => {
    if (isCurrentMonth) {
        if (isDateSunday) {
            return "off-day-color"
        }
        return "work-day-color"
    }
    else {
        if (isDateSunday) {
            return "other-month-off-day-color"
        }
        return "other-month-work-day-color"
    }
}