// var beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//   function actuallyPrintingNames() {
//     for (var index = 0; index < names.length; index++) {
//       var name = names[index];
  
//       console.log(name + ' was found at index ' + index);
//     }
//     console.log('name and index after loop is ' + name + ':' + index);
//   }
//   actuallyPrintingNames();
// }
// printNames(beatles);

// const beatles = ['Paul', 'George', 'John', 'Ringo'];

// function actuallyPrintingNames() {
//   let index = 0;
//   let name;
//   for (index; index < names.length; index++) {
//     name = names[index];
//     console.log(name + ' was found at index ' + index);
//   }
//   console.log('name and index after loop is ' + name + ':' + index);
// }

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }                
  actuallyPrintingNames()
}
printNames(beatles);
