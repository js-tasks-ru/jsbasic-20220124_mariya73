function truncate(str, maxlength) {
  let ellipsis = "...";
  let maxlengthstr = Number(maxlength - 1);
  return str.length > maxlength ? (str.slice(0, maxlengthstr) + '…') : str;
}