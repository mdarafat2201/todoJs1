let persons = [
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
  });
