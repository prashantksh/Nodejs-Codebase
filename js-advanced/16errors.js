// standard error handling mechanism

try {
  console.log(x); // this is an error
} catch (error) {
  // every error object has 3 properties
  console.log('Name of the error:', error.name);
  console.log('Error message: ', error.message);
  console.log('Error stack: ', error.stack);
} finally {
  console.log('this will run anyway');
}

// rethrowing

const errFoo = () => {
  try {
    console.log(x);
  } catch (error) {
    console.log(error.message);
    throw new Error('A new error message');
  } finally {
    console.log('this runs anyway');
  }
};

try {
  errFoo();
} catch (error) {
  console.log(error.message);
}
