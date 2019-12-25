const moment = require("moment");
let time = function (time) {
    let pattern = /^[0-9]*$/g;
    let isNum = pattern.test(time);
    const dateFormat = 'MMMM DD YYYY';
    if (isNum) {
        let date = moment.unix(time);
        return {
            unix: time,
            natural: date.format(dateFormat)
        };
    } else {
        if (moment(time, dateFormat).isValid()) {
            let date = moment(time, dateFormat);
            console.log(time);
            return {
                unix: date.format('X'),
                natural: time
            };
        } else {
            return {
                unix: null,
                natural: null
            }
        }
    }
};
module.exports = time;