export var parseStringDate = function (input, format) {
    if (input.length !== format.length) {
        return null;
    }
    var componentsOfFormatFromInput = format
        .split('')
        .reduce(function (acc, curr, index) {
        acc[curr] = "".concat(acc[curr] || '').concat(input[index]);
        return acc;
    }, {});
    var dateComponents = validChars.reduce(function (acc, curr) {
        acc[curr] = strToDateComponent[curr](componentsOfFormatFromInput[curr]);
        return acc;
    }, {});
    if (Object.values(dateComponents).some(function (component) { return component === null; })) {
        return null;
    }
    var year = dateComponents['Y'];
    var monthIndex = dateComponents['M'];
    var day = dateComponents['D'];
    var hours = dateComponents['h'] && dateComponents['a']
        ? dateComponents['h'] + (dateComponents['a'] === AMPM.PM ? 12 : 0)
        : dateComponents['H'];
    var minutes = dateComponents['m'];
    var seconds = dateComponents['s'];
    var date = new Date(year, monthIndex, day, hours, minutes, seconds);
    return date;
};
var validChars = ['Y', 'M', 'D', 'H', 'h', 'a', 'm', 's'];
var AMPM = {
    AM: 0,
    PM: 1,
};
var now = new Date();
var strToDateComponent = {
    Y: function (str) {
        return str ? Number(str) : now.getFullYear();
    },
    M: function (str) {
        var month = str ? Number(str) - 1 : now.getMonth();
        return month >= 0 && month <= 11 ? month : null;
    },
    D: function (str) {
        return str ? Number(str) : now.getDate();
    },
    H: function (str) {
        var hour = str ? Number(str) : now.getHours();
        return hour >= 0 && hour <= 23 ? hour : null;
    },
    h: function (str) {
        var hour = str ? Number(str) : now.getHours() % 12;
        return hour >= 0 && hour <= 12 ? hour : null;
    },
    a: function (str) {
        if (!str)
            return undefined;
        if (str.toLowerCase() === 'am') {
            return AMPM.AM;
        }
        else if (str.toLowerCase() === 'pm') {
            return AMPM.PM;
        }
        else {
            return null;
        }
    },
    m: function (str) {
        var minute = str ? Number(str) : now.getMinutes();
        return minute >= 1 && minute <= 59 ? minute : null;
    },
    s: function (str) {
        var second = str ? Number(str) : now.getSeconds();
        return second >= 1 && second <= 59 ? second : null;
    },
};
//# sourceMappingURL=date-parser.js.map