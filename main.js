/*let persons = [
  { firstName: "arafat", lastName: "islam" },
  { firstName: "accen", lastName: "hasan" },
  { firstName: "nabila", lastName: "khaton" },
];

function addperson(newperson) {
  let prom = new Promise((resolve, reject) => {
    persons.push(newperson);
    let error = false;
    if (!error) {
      resolve(Promise);
    } else {
      reject("something in wrong display functoin not response ");
    }
  });
  return prom;
}
function display(pushingperson) {
  const displprom = new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
      resolve(pushingperson);
    } else {
      reject("problem arise in display funciton");
    }
  });
  return displprom;
}

function alllastname(x) {
  x.forEach((element) => {
    console.log(element.lastName);
  });
}

addperson({ firstName: "fatema", lastName: "amar" })
  .then(display)
  .then(alllastname)
  .catch((error) => {
    console.log(error);
  });*/

// function one(callback, value) {
//   setTimeout(() => {
//     console.log("one");
//     callback(value + 10);
//   }, 2000);
// }

// function two(callback, value) {
//   setTimeout(() => {
//     console.log("two");
//     callback(value + 10);
//   }, 200);
// }

// function three(callback, value) {
//   setTimeout(() => {
//     console.log("three");
//     callback(value + 10);
//   }, 100);
// }

// function four(callback, value) {
//   setTimeout(() => {
//     console.log("four");
//     callback(value + 10);
//   }, 1100);
// }

// function five(callback, value) {
//   setTimeout(() => {
//     console.log("this is function five");
//     callback(value);
//   }, 2000);
// }

// function six(finalData) {
//   setTimeout(() => {
//     console.log("six", finalData);
//   });
// }
// function seven(callback, value) {
//   setTimeout(() => {
//     console.log("seven");
//     callback(value + 10);
//   }, 2000);
// }
// function nine(callback, value) {
//   setTimeout(() => {
//     console.log("nine");
//     callback(value + 10);
//   }, 400);
// }
// function ten(callback, value) {
//   setTimeout(() => {
//     console.log("ten");
//     callback(value + 10);
//   }, 200);
// }
// function eleven(callback, value) {
//   setTimeout(() => {
//     console.log("eleven");
//     callback(value + 10);
//   }, 100);
// }
// function tweleve(callback, value) {
//   setTimeout(() => {
//     console.log("tweleve");
//     callback(value + 10);
//   }, 300);
// }
// function thirteen(callback, value) {
//   setTimeout(() => {
//     console.log("thirteen");
//     callback(value + 10);
//   }, 200);
// }
// function fourteen(callback, value) {
//   setTimeout(() => {
//     console.log("fourteen");
//     callback(value + 10);
//   }, 100);
// }
// function fiftheen(callback, value) {
//   setTimeout(() => {
//     console.log("fiftheen");
//     callback(value + 10);
//   }, 500);
// }

// five(function (reslut1) {
//   four(function (r2) {
//     three(function (r3) {
//       one(function (r4) {
//         two(function (r5) {
//           fiftheen(function (r6) {
//             fourteen(function (r7) {
//               thirteen(function (r8) {
//                 tweleve(function (r9) {
//                   eleven(function (r10) {
//                     ten(function (r11) {
//                       nine(function (r12) {
//                         seven(function (r13) {
//                           six(r13);
//                         }, r12);
//                       }, r11);
//                     }, r10);
//                   }, r9);
//                 }, r8);
//               }, r7);
//             }, r6);
//           }, r5);
//         }, r4);
//       }, r3);
//     }, r2);
//   }, reslut1);
// }, 10);

/**
 * promise: 1) fullfiled 2) rejected 3) pending
 *
 */

// const mypromise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("your data is here");
//   }, 1000);
// });

// promise consuming
// mypromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// =====================
// function DataFetcher() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetching done");
//     }, 2000);
//   });
// }

// function display(promiseonevalue) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("your display done" + promiseonevalue);
//     }, 1000);
//   });
// }

// function addmasla(masla) {
//   return " our final function with masla" + masla;
// }

// DataFetcher()
//   .then((str) => {
//     return display(str);
//   })
//   .then((finalvalue) => {
//     return finalvalue;
//   })
//   .then((finalaginvalue) => {
//     return addmasla(finalaginvalue);
//   })
//   .then((foutput) => {
//     console.log(foutput);
//   });
