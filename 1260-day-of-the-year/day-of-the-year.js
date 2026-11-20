/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let d = new Date(date);
    let start = new Date(d.getFullYear(), 0, 0);
    let diff = d - start;
    return diff / (1000 * 60 * 60 * 24);
};