function highlight(table) {
  const tableUpdateTr = document.querySelectorAll('tr');
  const tableUpdateThead = document.querySelectorAll('thead tr td');
  const joThead = Array.from(tableUpdateThead);
  const Jo = Array.from(tableUpdateTr);
  for (j in joThead) {
    for (let i in Jo) {
      const a = joThead[j].innerHTML.indexOf('Status') && Jo[i].cells[3].hasAttribute('data-available') && Jo[i].cells[3].dataset.available == "true" ? Jo[i].cells[3].parentElement.classList.add('available') : null;
      const b = Jo[i].cells[3].hasAttribute('data-available') && Jo[i].cells[3].dataset.available == "false" ? Jo[i].cells[3].parentElement.classList.add('unavailable') : null;
      const c = Jo[i].cells[3].innerHTML.includes('Leeeroy Jenkins!') && !Jo[i].cells[3].hasAttribute('data-available') ? Jo[i].cells[3].parentElement.hidden = true : null;
      const d = Jo[i].cells[2].innerHTML.indexOf('m') ? Jo[i].cells[2].parentElement.classList.add('male') : null;
      const f = Jo[i].cells[2].innerHTML.indexOf('f') ? Jo[i].cells[2].parentElement.classList.add('female') : null;
      const e = Jo[i].cells[1].innerHTML.includes('17') ? Jo[i].cells[1].parentElement.style.textDecoration = 'line-through' : null;
    }
  }
  return table;
}