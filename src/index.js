module.exports = function toReadable(number) {
    let dg = ['zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine'
    ];
    let tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];
    let tw = ['ten', 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];
    if (number < 10) {
        return dg[number]
    } else if (number >= 10 && number < 20) {
        return tn[number - 10]
    } else if (number >= 20 && number < 100) {
        number = number.toString().split('')
        if (number[1] === '0') {
            return `${tw[number[0] - 1]}`
        } else {
            return `${tw[number[0] - 1]} ${dg[number[1]]}`
        }
    } else {
        let h = 'hundred';
        number = number.toString().split('');
        if (number[1] == '0' && number[2] == '0') {
            return `${dg[number[0]]} ${h}`
        } else if (number[1] == '0') {
            return `${dg[number[0]]} ${h} ${dg[number[2]]}`
        } else if (number[2] == '0') {
            return `${dg[number[0]]} ${h} ${tw[number[1] - 1]}`
        } else if (number[1] === '1') {
            return `${dg[number[0]]} ${h} ${tn[number[2]]}`
        } else {
            return `${dg[number[0]]} ${h} ${tw[number[1] - 1]} ${dg[number[2]]}`
        }
    }
}