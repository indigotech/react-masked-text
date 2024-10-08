import { DatetimeMask } from './../src/masks/datetime.mask';
var moment = require('moment');
const { parseStringDate } = require('../src/masks/internal-dependencies/date-parser.ts');

function compareMomentObj(dateTimeA, dateTimeB) {
    var momentA = moment(dateTimeA, "DD/MM/YYYY");
    var momentB = moment(dateTimeB, "DD/MM/YYYY");
    if (momentA > momentB) return 1;
    else if (momentA < momentB) return -1;
    else return 0;
}

test('getType results datetime', () => {
    var expected = 'datetime';
    var received = DatetimeMask.getType();

    expect(received).toBe(expected);
});

test('01011990174030 with format DD/MM/YYYY HH:mm:ss results 01/01/1990 17:40:30', () => {
    var mask = new DatetimeMask();
    var expected = '01/01/1990 17:40:30';
    var received = mask.getValue('01011990174030');

    expect(received).toBe(expected);
});

test('01011990174030 with format DD-MM-YYYY HH:mm:ss results 01-01-1990 17:40:30', () => {
    var mask = new DatetimeMask();
    var expected = '01-01-1990 17:40:30';
    var received = mask.getValue('01011990174030', {
        format: 'DD-MM-YYYY HH:mm:ss'
    });

    expect(received).toBe(expected);
});


test('01011990 with format DD-MM-YYYY results 01-01-1990', () => {
    var mask = new DatetimeMask();
    var expected = '01-01-1990';
    var received = mask.getValue('01011990', {
        format: 'DD-MM-YYYY HH:mm:ss',
    });

    expect(received).toBe(expected);
});

test('191050 with format HH:mm:ss results 19:10:50 and is valid', () => {
    var mask = new DatetimeMask();
    var input = '191050';
    var settings = {
        format: 'HH:mm:ss',
    };

    var expected = '19:10:50';
    var received = mask.getValue(input, settings);
    var isValid = mask.validate(input, settings);

    expect(received).toBe(expected);
    expect(isValid).toBe(true);
});

test('99999999 with format DD/MM/YYYY results 99/99/9999 and is invalid', () => {
    var mask = new DatetimeMask();
    var input = '99999999';
    var settings = {
        format: 'DD/MM/YYYY',
    };

    var expected = '99/99/9999';
    var received = mask.getValue(input, settings);
    var isValid = mask.validate(input, settings);

    expect(received).toBe(expected);
    expect(isValid).toBe(false);
});

test('01011990174030 with format DD/MM/YYYY HH:mm:ss results 01/01/1990 17:40:30 and is valid', () => {
    var mask = new DatetimeMask();
    var input = '01011990174030';
    var settings = {
        format: 'DD/MM/YYYY HH:mm:ss',
    };

    var expected = '01/01/1990 17:40:30';
    var received = mask.getValue(input, settings);
    var isValid = mask.validate(input, settings);

    expect(received).toBe(expected);
    expect(isValid).toBe(true);
});

test('01011990174030 with format DD/MM/YYYY HH:mm:ss results 01/01/1990 17:40:30 and raw value Date', () => {
    var mask = new DatetimeMask();
    var expected = '01/01/1990 17:40:30';
    var settings = {
        format: 'DD/MM/YYYY HH:mm:ss',
    };
    var received = mask.getValue('01011990174030');

    var expectedRawValue = parseStringDate(received, settings.format);
    var receivedRawValue = mask.getRawValue(received, settings);

    expect(received).toBe(expected);
    expect(compareMomentObj(receivedRawValue, expectedRawValue)).toBe(0);
});