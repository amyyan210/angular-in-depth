module.exports = {
    capitalize: function(str) {
        return str && isNaN(str) ? str.slice(0, 1).toUpperCase() + str.slice(1) : str;
    },
    isDivisibleByThree: function (num) {
        console.log(!Number.isNaN(num));
        return num && (!Number.isNaN(num)) && num % 3 === 0;
    }
}                                                                                                                             