const listTitle = document.getElementById('inputTitle');
const listQa= document.getElementById('inputQa');
const listOfItems = document.getElementById('listBook');
const submit = document.getElementById('MakeCatalog');
submit.addEventListener('submit', makeList);

var selectedRowIndex = 0;

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

    listTitle.value ='';
    listQa.value = '1';
}

function copyDataToAddForm(event){
    const clickedRow = event.target.parentElement;
    listTitle.value = clickedRow.childNodes[0].textContent
    listQa.value = clickedRow.childNodes[1].textContent
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
