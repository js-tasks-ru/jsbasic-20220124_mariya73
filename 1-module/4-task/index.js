function checkSpam(str) {
  return (str.includes('1xBet') || str.includes('1XbeT') || str.includes('XXX') || str.includes('xxx')) ? true : false;
}
