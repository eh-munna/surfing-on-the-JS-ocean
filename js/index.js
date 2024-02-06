// JavaScript Errors

try {
  console.log(add);
} catch (error) {
  console.log(error.message);
}

const num = 3;

try {
  if (num < 5) {
    // throw new Error({ errorMessage: 'num is less than 10' });
    throw { errorMessage: 'num is less than 10' };
  } else if (num > 10) {
    throw new Error('num is greater than 10');
  }
} catch (error) {
  console.log(error);
}

// try {
//   if (num < 5) {
//     throw new Error({ errorMessage: 'num is less than 5' }.errorMessage);
//   } else if (num > 10) {
//     throw new Error('num is greater than 10');
//   }
// } catch (error) {
//   console.log(error.errorMessage);
// }

// try {
//   if (num < 5) {
//     const customError = new Error('num is less than 5');
//     customError.errorMessage = 'Custom error message';
//     throw customError;
//   } else if (num > 10) {
//     throw new Error('num is greater than 10');
//   }
// } catch (error) {
//   console.log(error.message);
//   console.log(error.errorMessage); // Access the custom property if needed
// }

// try catch finally

try {
  throw new Error('An error occurred');
} catch (error) {
  console.error('Caught an error:', error.message);
} finally {
  console.log('This block will always be executed');
}
