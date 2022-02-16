function getMinMax(str) {
  const newArr = str.split(" ");
  const numEl = newArr.filter(item => parseInt(item));
  const maxNumber = numEl.reduce((prev, item) => {
    return Math.max(prev, item)
  });
  const minNumber = numEl.reduce((prev, item) => {
    return Math.min(prev, item);
  });
  let objectNumber = {
    min: minNumber,
    max: maxNumber,
  };
  return objectNumber;
}