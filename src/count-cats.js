module.exports = function countCats(backyard) {
  return backyard.flat().filter(el => el == "^^").length;
};
