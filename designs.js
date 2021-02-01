const selectColor = "#1d96b2";
const prevColor =  "#ffffff";
const listTitle = document.getElementById('inputTitle');
const listQa= document.getElementById('inputQa');
const listOfItems = document.getElementById('listBook');
const submit = document.getElementById('MakeCatalog');
  submit.addEventListener('submit', function (e){
    e.preventDefault();
    makeList();
  }
)

var selectedRowIndex = 0;

function makeList(){
    const row = document.createElement('tr');

    const columnItem = document.createElement('td');
    columnItem.innerHTML = listTitle.value;
    row.appendChild(columnItem);

    const columnQuantity = document.createElement('td');
    columnQuantity.innerHTML = listQa.value;
    row.appendChild(columnQuantity);

    listOfItems.append(row);
    row.addEventListener('click', function(event){
      selectRowHandler(event);
    });

    listTitle.value ='';
    listQa.value = '1';

}

function selectRowHandler(event){
  if (selectedRowIndex > 0 ){
    const prevSelectedRow = listOfItems.rows[selectedRowIndex];
    prevSelectedRow.style.backgroundColor = prevColor;
  };
  const clickedRow = event.target.parentElement; //We need parentElement because target is a cell, not a row
  clickedRow.style.backgroundColor = selectColor;
  selectedRowIndex = clickedRow.rowIndex;
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
