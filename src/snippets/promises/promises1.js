const error = false;

function fetch(url) {
  return new Promise((resolve, reject) => {
    if (error) {
      return reject({
        status: 400,
        message: "Fallé maestro",
      });
    }

    return resolve({ url });
  });
}

function doSomething() {
  return new Promise((resolve, reject) => reject(42));
}

function addParam(obj) {
  return new Promise((resolve, reject) => {
    if (error) {
      return reject({ message: "Fallé en addParams" });
    }

    return resolve({ ...obj, param: "new-param" });
  });
}

function addOtherParam(obj) {
  return new Promise((resolve, reject) => {
    if (error) {
      return reject({ message: "Fallé en addOtherParam" });
    }

    return resolve({ ...obj, otherParam: "other-new-param" });
  });
}

function asyncFn() {
  // try {
  //   const result = await fetch("https://ksquareqa-admin.zanma.io/api/v1/courses");
  // } catch (err) {
  //   console.log(err);
  //   showErrorNotification(err)
  // }

  let outerObj;

  return fetch("https://ksquareqa-admin.zanma.io/api/v1/courses")
    .then((obj) => {
      outerObj = { ...obj };
      return addParam(obj);
    })
    .catch(console.log)
    .then((objFromAddParam) => {
      if (objFromAddParam) {
        return addOtherParam(objFromAddParam);
      }

      return addOtherParam(outerObj);
    })
    .catch((error) => Promise.reject(error));
}

asyncFn().then(console.log).catch(console.log);

const objs = [{ sum: 42 }, { sum: 7 }];
const promises = objs.map(addParam);

Promise.race(promises).then(console.log).catch(console.log);
Promise.all(promises).then(console.log).catch(console.log);
