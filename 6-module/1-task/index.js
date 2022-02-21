export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.createTable(rows);
  }
  createTable(rows) {
    const table = document.createElement('table');
    this.tbody = table.createTBody('tbody');
    for (const rowTable of this.rows) {
      this.tbody.insertAdjacentHTML('beforeEnd', `<tr>
				<td>${rowTable.name}</td>
				<td>${rowTable.age}</td>
        <td>${rowTable.salary}</td>
        <td>${rowTable.city}</td>
        <td><button>X</button></td>
			</tr>`);
    }

    let button = this.tbody.querySelectorAll('button');
    button.forEach(item => {
      item.addEventListener('click', (event) =>
        event.target.closest("tr").remove());
    });

    return table;
  }

}
