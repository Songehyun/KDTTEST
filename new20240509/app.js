const studentNamesArray = require('./names-data.js');

studentNamesArray.forEach((name) => {
  console.log(name);
});

function na (array) {
  for(let i = 0; i < array.length; i++){
  let name = array[i];
  console.log(name);
  }
}


// for(let i = 0; i < studentNamesArray.length; i++) {
//   console.log(studentNamesArray[i]);
// }