let userName = "Brad";
userName = "Jenna";

function getUserNameLength() {
  return (getUserNameLength = userName.length);
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

// TODO: Implement the isString function

function isString(a) {
  return typeof a === "string";
}

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
