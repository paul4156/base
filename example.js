var MyError = require("./js-error");

try {
  throw new MyError("My error message");
} catch (error) {
  if (error instanceof MyError) {
    console.error("caught");
  } else {
    console.error("missed");
  }
}
