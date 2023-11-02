
function generateTable() {
  let number = document.getElementById("number").value;
  let table = document.getElementById("multiplication-table");
  table.innerHTML = "";
  for (let i = 0; i <= 9; i++) {
    let row = table.insertRow();
    for (let j = 0; j <= 9; j++) {
      let cell = row.insertCell();
      cell.innerHTML = i + " x " + j + " = " + i * j;
    }
  }
}