const listTitle = document.getElementById('inputTitle');
const listQa= document.getElementById('inputQa');
const listOfItems = document.getElementById('listBook');
const submit = document.getElementById('MakeCatalog');
const buttonAdd = document.getElementById("add");
const saveButton = document.getElementById("saveButton");
const clearButton = document.getElementById("clearButton");
const inputDelete = document.getElementById("inputDelete");
const up = document.getElementById("up");
const down = document.getElementById("down");
submit.addEventListener('submit', makeList);
clearForm();

var selectedRowIndex = 0;
saveButton.style.visibility = "hidden";
clearButton.style.visibility = "hidden";

function makeList(event){
    event.preventDefault();
    const row = document.createElement('tr');

    const columnItem = document.createElement('td');
    columnItem.innerHTML = listTitle.value;
    row.appendChild(columnItem);

    const columnQuantity = document.createElement('td');
    columnQuantity.innerHTML = listQa.value;
    row.appendChild(columnQuantity);

    listOfItems.append(row);
    row.addEventListener('click', selectRowHandler);
    row.addEventListener('dblclick', copyDataToAddForm);
    clearForm();
}

function copyDataToAddForm(event){
    const clickedRow = event.target.parentElement;
    listTitle.value = clickedRow.childNodes[0].textContent
    listQa.value = clickedRow.childNodes[1].textContent
    saveButton.style.visibility = "visible";
    clearButton.style.visibility = "visible";
    buttonAdd.style.display = "none";
    inputDelete.disabled = true;
    up.disabled = true;
    down.disabled = true;
}

function selectRowHandler(event){
  if (selectedRowIndex > 0 ){
    const prevSelectedRow = listOfItems.rows[selectedRowIndex];
    prevSelectedRow.classList.remove("selectedRow");
  };
  const clickedRow = event.target.parentElement; //We need parentElement because target is a cell, not a row
  clickedRow.classList.add("selectedRow");
  selectedRowIndex = clickedRow.rowIndex;
}

function save(){
    const selectedRow = listOfItems.rows[selectedRowIndex];
    selectedRow.childNodes[0].textContent = listTitle.value;
    selectedRow.childNodes[1].textContent = listQa.value;
    buttonAdd.style.display = "inline";
    saveButton.style.visibility = "hidden";
    clearButton.style.visibility = "hidden";
    inputDelete.disabled = false;
    up.disabled = false;
    down.disabled = false;
    clearForm();
}

function clearForm() {
    listTitle.value ='';
    listQa.value = 1;
}

function deleteRow(){
  if(selectedRowIndex > 0){
    listOfItems.deleteRow(selectedRowIndex);
    selectedRowIndex = 0;
  }
}

function upRow(){
  if(selectedRowIndex > 1){
    const refRow = listOfItems.rows[selectedRowIndex-1];
    const rowToMove = listOfItems.rows[selectedRowIndex];
    listOfItems.insertBefore(rowToMove, refRow);
    selectedRowIndex--;
  }
}

function downRow(){
  if(selectedRowIndex < listOfItems.rows.length - 1){
    const rowToMove = listOfItems.rows[selectedRowIndex];
    const refRow = listOfItems.rows[selectedRowIndex+2];
    listOfItems.insertBefore(rowToMove, refRow);
    selectedRowIndex++;
  }
}
