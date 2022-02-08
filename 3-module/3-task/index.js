function camelize(str) {
  let newStr = str.replaceAll(/(?<=-)\w/g, (text) => text.toUpperCase());
  return newStr.replaceAll('-', '');
}