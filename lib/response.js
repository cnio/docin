exports.type =
    prompt('Response Type', 'JSON', function (arg) {
        if (arg) return arg.trim();
    });

exports.res_keys_length =
    prompt('Response Parameters Length', '0', function (num) {
        if (isPositiveNum(num)) return num;
        var er = new Error('The number must be positive integer: "' + num + '"');
        er.notValid = true;
        return er;
    });

function isPositiveNum(s) {
    var re = /^[0-9]*[0-9][0-9]*$/;
    return re.test(s)
}
