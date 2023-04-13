const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const a = Array.isArray(members);
  if(a){
    return members
    .map((el) => (typeof el === "string" ? el.trim()[0].toUpperCase() : null))
    .sort()
    .join("")
  }else{
    return false
  }
}

module.exports = {
  createDreamTeam,
};
