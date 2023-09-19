/**
 * Parses a datetime (ex: 01/01/1990 17:40:30) given a format (ex: DD/MM/YYYY HH:mm:ss)
 * Nowadays, this parsers supports:
 * - MM   = 01..12	Month number
 * - DD   = 01..31	Day of month
 * - YYYY = 4 or 2 digit year (ex= 2018)
 * - YY   = 2 digit year (ex= 18)
 * - HH   = 0..23	Hours (24 hour time)
 * - hh   = 1..12	Hours (12 hour time used with a A.)
 * - kk   = 1..24	Hours (24 hour time from 1 to 24)
 * - aa   = m pm	Post or ante meridiem (Note the one character a p are also considered valid)
 * - mm   = 0..59	Minutes
 * - ss   = 0..59	Seconds
 */
type DateKeys = 'Y' | 'M' | 'D' | 'H' | 'h' | 'a' | 'm' | 's';

type DateComponents = {
  [k in DateKeys]: number;
};

interface FormatComponents {
  [key: string]: string;
}

export const parseStringDate = (input: string, format: string): Date => {
  if (input.length !== format.length) {
    return null;
  }

  const componentsOfFormatFromInput: FormatComponents = format
    .split('')
    .reduce((acc: FormatComponents, curr: string, index: number) => {
      acc[curr] = `${acc[curr] || ''}${input[index]}`;
      return acc;
    }, {});

  const dateComponents: DateComponents = validChars.reduce((acc: DateComponents, curr: string) => {
    acc[curr as DateKeys] = strToDateComponent[curr](componentsOfFormatFromInput[curr]);
    return acc;
  }, {} as DateComponents);

  if (Object.values(dateComponents).some((component) => component === null)) {
    return null;
  }

  const year = dateComponents['Y'];
  const monthIndex = dateComponents['M'];
  const day = dateComponents['D'];
  const hours =
    dateComponents['h'] && dateComponents['a']
      ? dateComponents['h'] + (dateComponents['a'] === AMPM.PM ? 12 : 0)
      : dateComponents['H'];
  const minutes = dateComponents['m'];
  const seconds = dateComponents['s'];

  const date = new Date(year, monthIndex, day, hours, minutes, seconds);
  return date;
};

const validChars: string[] = ['Y', 'M', 'D', 'H', 'h', 'a', 'm', 's'];

const AMPM: { [key: string]: number } = {
  AM: 0,
  PM: 1,
};
const now: Date = new Date();
const strToDateComponent: { [key: string]: (str: string) => number | null | undefined } = {
  Y: (str: string): number => {
    return str ? Number(str) : now.getFullYear();
  },
  M: (str: string): number | null => {
    const month = str ? Number(str) - 1 : now.getMonth();
    return month >= 0 && month <= 11 ? month : null;
  },
  D: (str: string): number => {
    return str ? Number(str) : now.getDate();
  },
  H: (str: string): number | null => {
    const hour = str ? Number(str) : now.getHours();
    return hour >= 0 && hour <= 23 ? hour : null;
  },
  h: (str: string): number | null => {
    const hour = str ? Number(str) : now.getHours() % 12;
    return hour >= 0 && hour <= 12 ? hour : null;
  },
  a: (str: string): number | undefined => {
    if (!str) return undefined;
    if (str.toLowerCase() === 'am') {
      return AMPM.AM;
    } else if (str.toLowerCase() === 'pm') {
      return AMPM.PM;
    } else {
      return null;
    }
  },
  m: (str: string): number | null => {
    const minute = str ? Number(str) : now.getMinutes();
    return minute >= 1 && minute <= 59 ? minute : null;
  },
  s: (str: string): number | null => {
    const second = str ? Number(str) : now.getSeconds();
    return second >= 1 && second <= 59 ? second : null;
  },
};
