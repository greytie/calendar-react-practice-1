import { getMonthOffsets } from './date-helpers'

describe("getMonthOffsets", () => {

    test.each([
        [2023, 3, 3, 8],
        [2023, 4, 6, 6],
        [2023, 5, 1, 10],
    ])('for date %i-%i-%i returns expected prepend offset %i and append offset %i ', (year, month, pOffset, aOffset) => {
        const result = getMonthOffsets(year, month);
        expect(result.prepend).toBe(pOffset);
        expect(result.append).toBe(aOffset);
    })
})