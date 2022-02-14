function hideSelf() {
  const button = document.querySelector('.hide-self-button');
  button.onclick = function() {
    return this.hidden = true;
  };
}
