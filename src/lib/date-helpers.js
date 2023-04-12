import { getDay, getDaysInMonth, add } from 'date-fns'

const MAX_CELL_COUNT_IN_MONTH = 42;

/**
 * Calculates cell offsets for rendered calendar month.
 * 
 * For example, if the month starts on a Tuesday, 
 * the first cell should be prepended with two cells
 * since the first day of the week is Sunday on Julian
 * calendars.
 * 
 * @param {number} year 
 * @param {number} month
 * @returns number
 */
export const getMonthOffsets = (year, month) => {
    // Ranges from 0 to 6.
    // 0 is sunday.
    const dateObj = new Date(year, month - 1);
    const dayOfWeek = getDay(dateObj);
    const numberOfDaysInMonth = getDaysInMonth(dateObj)

    return {
        prepend: dayOfWeek,
        append: MAX_CELL_COUNT_IN_MONTH - (dayOfWeek + numberOfDaysInMonth)
    }
}

export const getNumberOfDaysForMonth = (year, month) => {
    const dateObj = new Date(year, month - 1);
    return getDaysInMonth(dateObj);
}

/**
 * 
 * @param {Date} date 
 * @param {number} monthOffset 
 */
export const addMonth = (date, monthOffset) => {
    return add(date, { months: monthOffset })
}

/**
 * 
 * @param {*} date 
 * @param {*} increment 
 * @returns 
 */
export const addDays = (date, increment) => {
    return add(date, { days: increment })
}
 

export const getAllDatesInMonth = (year, month) => {
    const dateObj = new Date(year, month - 1);
    const numberOfDaysInMonth = getDaysInMonth(dateObj);
    const dates = []
    for (let i = 0; i < numberOfDaysInMonth; i++) {
        dates.push(add(dateObj, { day: i + 1}))
    }

    return dates;
}

/**
 * 
 * @param {Date} date 
 * @param {number} range 
 * @returns 
 */
export const getDatesInRange = (date, range) => {
    const dates = []
    for (let i = 0; i < range; i++) {
        dates.push(add(date, { days: i}))
    }

    return dates;
}
