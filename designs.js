const selectColor = "#1d96b2";
const listTitle = document.getElementById('inputTitle');
const listQa= document.getElementById('inputQa');
const listOfItems = document.getElementById('listBook');

const submit = document.getElementById('MakeCatalog');
  submit.addEventListener('submit', function (e){
    e.preventDefault();
    makeList();
  }
)

var selectedRowIndex = -1;

function makeList(){
    const row = document.createElement('tr');

    const columnItem = document.createElement('td');
    columnItem.innerHTML = listTitle.value;
    row.appendChild(columnItem);

    const columnQuantity = document.createElement('td');
    columnQuantity.innerHTML = listQa.value;
    row.appendChild(columnQuantity);

    const columnButton = document.createElement('td');

    const deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'Delete';
    deleteButton.addEventListener('click', function(event) {
      deleteRow(event);
    });

    const upButton = document.createElement('input');
    upButton.type = 'button';
    upButton.value = 'Up';
    upButton.addEventListener('click', function(event) {
      upRow(event);
    });

    const downButton = document.createElement('input')
    downButton.type = 'button';
    downButton.value = 'Down';
    downButton.addEventListener('click', function(event) {
      downRow(event);
    });

    columnButton.appendChild(deleteButton);
    columnButton.appendChild(upButton);
    columnButton.appendChild(downButton);

    row.appendChild(columnButton);

    listOfItems.append(row);
    row.addEventListener('click', function(event){
        if (selectedRowIndex >= 0 ){
          const prevSelectedRow = listOfItems.rows[selectedRowIndex];
          prevSelectedRow.style.backgroundColor = "#ffffff";
        };
        const clickedRow = event.target.parentElement;
        clickedRow.style.backgroundColor = selectColor;
        selectedRowIndex = clickedRow.rowIndex;
    });
    listTitle.value ='';
    listQa.value = '1';

}

function deleteRow(event){
  const delButton = event.target;
  const rowIndex = delButton.parentElement.parentElement.rowIndex;
  listOfItems.deleteRow(rowIndex);
  event.stopPropagation();
}

function upRow(event){
  const rowToMove = event.target.parentElement.parentElement;
  const table = rowToMove.parentElement;
  if(rowToMove.rowIndex > 1){
    if(selectedRowIndex == rowToMove.rowIndex){
      selectedRowIndex--;
    }
    const refRow = table.rows[rowToMove.rowIndex-1];
    table.insertBefore(rowToMove, refRow);
  }
  event.stopPropagation();
}

function downRow(event){
  const rowToMove = event.target.parentElement.parentElement;
  const table = rowToMove.parentElement;
  if(rowToMove.rowIndex < table.rows.length){
    if(selectedRowIndex == rowToMove.rowIndex){
      selectedRowIndex++;
    }
    const refRow = table.rows[rowToMove.rowIndex+2];
    table.insertBefore(rowToMove, refRow);
  }
  event.stopPropagation();
}
