module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members))
    return false;

  let res = members
    .filter(m => typeof(m) === 'string')
    .map(s => s.trim().slice(0, 1).toUpperCase())
    .sort()
    .join('');    

  return res.length ? res : false;
};
