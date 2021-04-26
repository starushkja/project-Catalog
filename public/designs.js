const listTitle = document.getElementById('inputTitle');
const listQa= document.getElementById('inputQa');
const listOfItems = document.getElementById('listBook');
const submit = document.getElementById('MakeCatalog');
submit.addEventListener('submit', makeList);
clearForm();
const buttonAdd = document.getElementById("add");
const buttonSave = document.getElementById("buttonSave");
const buttonClear = document.getElementById("buttonClear");
const buttonDelete = document.getElementById("inputDelete");
const buttonUp = document.getElementById("up");
const buttonDown = document.getElementById("down");

var selectedRowIndex = 0;
buttonSave.style.visibility = "hidden";
buttonClear.style.visibility = "hidden";

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

function copyDataToAddForm(){
    const clickedRow = event.target.parentElement;
    listTitle.value = clickedRow.childNodes[0].textContent
    listQa.value = clickedRow.childNodes[1].textContent
    contraEdit(true);
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
    contraEdit(false);
    clearForm();
}

function cancel(event){
    contraEdit(false);
    clearForm();
}

function clearForm() {
    listTitle.value ='';
    listQa.value = 1;
}

function contraEdit(mode){
  if (mode) {
    buttonSave.style.visibility = "visible";
    buttonClear.style.visibility = "visible";
    buttonAdd.style.display = "none";
    buttonDelete.disabled = true;
    buttonUp.disabled = true;
    buttonDown.disabled = true;
  }
  else {
    buttonAdd.style.display = "inline";
    buttonSave.style.visibility = "hidden";
    buttonClear.style.visibility = "hidden";
    buttonDelete.disabled = false;
    buttonUp.disabled = false;
    buttonDown.disabled = false;
  }
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

function loadCatalog() {
  const xhr = new XMLHttpRequest();
  xhr.ontimeout = function () {
      console.error("The request for " + url + " timed out.");
  };
  xhr.onload = function() {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              console.log(xhr.responseText)
          } else {
              console.error(xhr.statusText);
          }
      }
  };
  const jsonFileName = "catalog.json"
  const timeout = 5;
  xhr.open("GET", jsonFileName, true);
  xhr.timeout = timeout;
  xhr.send(null);
}

loadCatalog()
