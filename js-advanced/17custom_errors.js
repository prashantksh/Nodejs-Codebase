class ValidationError extends Error {
  // custom error class should extend Error base class
  constructor(message) {
    super(message); // this step is mandatory
    this.name = 'ValidationError'; // if you leave this line, its name is going to be Error (takes from base class)
  }
}

try {
  throw new ValidationError('Message for validation error');
} catch (error) {
  // This is how layered error handling is done
  if (error instanceof ValidationError) {
    console.log('ValidationError');
  } else if (error instanceof Error) {
    console.log('Error');
  } else {
    console.log('Not known');
  }
  console.log(error);
}
