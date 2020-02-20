module.exports = function getSeason(date) {
  
  if (!date)
    return 'Unable to determine the time of year!';
    
  if (Object.prototype.toString.apply(date) != '[object Date]')
    throw new Error;
  
  switch (Math.trunc((date.getMonth() + 1) / 3)) {      
    case 1:
      return 'spring';
    case 2:
      return 'summer';
    case 3:
      return 'autumn';
    default:
      return 'winter';
  } 
};
