/**
 * Aqui la promesa se ejecuta al cargar el archivo
 */
const somethingWillHapped = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Whoops!");
    }
  });
};

somethingWillHapped()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

//----------------

const somethingWillHapped2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Ups");
      reject(error);
    }
  });
};

somethingWillHapped2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

//--------Correr varias promesas al mismo tiempo o encadenadas  ---->   Promise.all()

Promise.all([somethingWillHapped(), somethingWillHapped2()])
  .then((response) => {
    console.log("Array of results", response);
  })
  .catch((err) => {
    console.error(err);
  });
