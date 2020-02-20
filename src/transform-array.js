module.exports = function transform(arr) {

    if (!(arr instanceof Array))
        throw new Error;

    let res = arr.slice();

    res.push('del');
    res.unshift('del');

    let result = [];

    let j = 0;

    for (let i = 0; i < arr.length + 1; i++){
        switch (res[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                result.pop();
                break;
            case '--double-next':
                result.push(res[i + 1]);
                break;
            case '--double-prev':
                result.push(res[i - 1]);
                break;
            case 'del':
                break;    
            default:
                result.push(res[i]);
                break;
        }
    }

    return result.filter(el => el != 'del');

};
