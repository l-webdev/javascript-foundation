function countSheep(array) {
  const filteredSheep = array.filter(
    (sheep) => sheep === true && sheep !== null && sheep !== undefined
  );
  return filteredSheep.length;
}

const arrayOfSheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheep(arrayOfSheep));
