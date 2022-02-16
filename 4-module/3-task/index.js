function highlight(table) {
  const tableUpdateTr = table.querySelectorAll('tr');
  for (let i of tableUpdateTr) {
    const tableUpdateTd = i.querySelectorAll('td');
    for (let j of tableUpdateTd) {
      if (j.dataset.available == "true") {
        i.classList.add('available');
      } else if (j.dataset.available == "false") {
        i.classList.add('unavailable');
      } else if (j.textContent == "f") {
        i.classList.add('female');
      } else if (j.textContent == "m") {
        i.classList.add('male');
      } else if (j.textContent <= +"18") {
        i.style.textDecoration = 'line-through';
      }
      if (i.classList.contains('unavailable') || i.classList.contains('available')) {
        i.hidden = false;
      } else {
        i.hidden = true;
      }
    }
  }
}