// JavaScript Async

// Callback Functions

// function myCallback(message) {
//   console.log(message);
// }

// function normalFunc(message, callBackFunc) {
//   return callBackFunc(message);
// }

// const message = normalFunc(`Simple callback function`, myCallback);
// console.log(message);

function myCallback(message) {
  // console.log(`${message} callback function`);
}

function normalFunc(message, callBackFunc) {
  callBackFunc(message);
  return `${message} normal function`;
}

const message = normalFunc(`Message for`, myCallback);
// console.log(message); // This will log 'Simple callback function'

// Callback Pattern

const isPaymentDone = true;
const marks = 89;

// Version 1:

/* const enrolment = (courseStatus) => {
  // console.log(`Id created, waiting for enrolment`);

  setTimeout(() => {
    if (isPaymentDone) {
      // console.log(`Enrolment completed`);
      courseStatus(getCertificate);
    } else {
      // console.log(`Enrolment failed`);
    }
  }, 2000);
};

const courseStatus = (getCertificate) => {
  // console.log(`Congratulations, you have completed the course`);

  setTimeout(() => {
    if (marks >= 75) {
      getCertificate();
    } else {
      // console.log(`Certificate not generated`);
    }
  }, 4000);
};

const getCertificate = () => {
  // console.log(`Certificate generated`);
  setTimeout(() => {
    // console.log(`Certificate is delivered`);
  }, 6000);
};

enrolment(() => {
  courseStatus(getCertificate);
}); */

// Version 2:

/* const enrolment = (courseStatus) => {
  console.log(`Id created, waiting for enrolment`);

  setTimeout(() => {
    if (isPaymentDone) {
      console.log(`Enrolment completed`);
      courseStatus(getCertificate);
    } else {
      console.log(`Enrolment failed`);
    }
  }, 2000);
};

const courseStatus = (getCertificate) => {
  console.log(`Congratulations, you have completed the course`);

  setTimeout(() => {
    if (marks >= 75) {
      getCertificate();
    } else {
      console.log(`Certificate not generated`);
    }
  }, 4000);
};

const getCertificate = () => {
  console.log(`Certificate generated`);
  setTimeout(() => {
    console.log(`Certificate is delivered`);
  }, 6000);
};

enrolment(courseStatus); */

// JavaScript Promises

let status = false;
// console.log(`Task 1`);

const promise = new Promise((resolve, reject) => {
  if (status) {
    resolve(`Task 2 is done`);
  } else {
    reject(`Something is wrong`);
  }
});

promise
  .then((response) => {
    // console.log(response);
  })
  .catch((error) => {
    // console.log(error);
  });

/* const time = new Date().toLocaleTimeString();

const hour = new Date().getHours();

console.log(hour >= 12 ? `Good Noon Munna` : `Good Morning Munna`); */

const enrolment = () => {
  console.log(`Id created, waiting for enrolment`);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPaymentDone) {
        resolve(`Enrolment completed`);
      } else {
        reject(`Enrolment failed`);
      }
    }, 2000);
  });
  return promise;
};

const courseStatus = () => {
  console.log(`Course is on progress`);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 75) {
        resolve(
          `Congratulations, you have completed the course with average marks of ${marks}. Your certificate will be available soon.`
        );
      } else {
        reject(
          `Congratulations, you have completed the course with average marks of ${marks}`
        );
      }
    }, 4000);
  });
  return promise;
};

const getCertificate = () => {
  console.log(`Certificate generated`);

  return new Promise((resolve) => {
    // const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Certificate is delivered`);
    }, 6000);
  });
  // return promise;
};

/* enrolment()
  .then((response) => {
    console.log(response);
    return courseStatus();
  })
  .then((response) => {
    console.log(response);
    return getCertificate();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  }); */

/* 

// under the hood, the functions are still returning something implicitly

enrolment()
  .then(courseStatus)
  .then(getCertificate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  }); */

const course = async () => {
  try {
    const enrol = await enrolment();
    console.log(enrol);

    const status = await courseStatus();
    console.log(status);

    const certificate = await getCertificate();
    console.log(certificate);
  } catch (error) {
    console.log(error);
  }
};

course();
