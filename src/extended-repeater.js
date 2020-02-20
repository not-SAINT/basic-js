module.exports = function repeater( str, options ) {
    let rep = options.repeatTimes || 1;
    let separator = options.separator !== undefined ? options.separator + '' : '+';
    let add = options.addition !== undefined ? options.addition + '' : '';
    let addSeparator = options.additionSeparator || '|';
    let repeatAdd = options.additionRepeatTimes || 1;
  
    let fullAdd = (add + addSeparator).repeat(repeatAdd).slice(0, -addSeparator.length);  
 
    return (str + fullAdd + separator).repeat(rep).slice(0, -separator.length);
};
  