import { parseStringDate } from '../src/masks/internal-dependencies/date-parser';

var input1 = '01/01/1990 17:40:30';
const format1 = `DD/MM/YYYY HH:mm:ss`;
test(`format ${format1} parses ${input1}`, () => {
    const date = parseStringDate(input1, format1);

    expect(date.getFullYear()).toBe(1990);
    expect(date.getMonth()).toBe(0);
    expect(date.getDay()).toBe(1);
    expect(date.getHours()).toBe(17);
    expect(date.getMinutes()).toBe(40);
    expect(date.getSeconds()).toBe(30);
});

var input2 = '01-01-1990';
const format2 = `DD-MM-YYYY`;
test(`format ${format2} parses ${input2}`, () => {
    const date = parseStringDate(input2, format2);

    expect(date.getFullYear()).toBe(1990);
    expect(date.getMonth()).toBe(0);
    expect(date.getDay()).toBe(1);
});

var input3 = '99.99.9999';
const format3 = `DD.MM.YYYY`;
test(`format ${format3} doesnt parse ${input3}`, () => {
    const date = parseStringDate(input3, format3);

    expect(date).toBe(null);
});

var input4 = '14/a1/2018';
const format4 = `DD/MM/YYYY`;
test(`format ${format4} parses ${input4}`, () => {
    const date = parseStringDate(input4, format4);

    expect(date).toBe(null);
});

var input5 = '17:40:30';
const format5 = `HH:mm:ss`;
test(`format ${format5} parses ${input5}`, () => {
    const date = parseStringDate(input5, format5);

    expect(date.getHours()).toBe(17);
    expect(date.getMinutes()).toBe(40);
    expect(date.getSeconds()).toBe(30);
});

var input6 = '09:40 PM';
const format6 = `hh:mm aa`;
test(`format ${format6} parses ${input6}`, () => {
    const date = parseStringDate(input6, format6);

    expect(date.getHours()).toBe(21);
    expect(date.getMinutes()).toBe(40);
});

var input7 = '17';
const format7 = `HH`;
test(`format ${format7} parses ${input7}`, () => {
    const date = parseStringDate(input7, format7);

    expect(date.getHours()).toBe(17);
});
