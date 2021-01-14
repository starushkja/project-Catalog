const selectColor = "#1d96b2";
const listTitle = document.getElementById('inputTitle');
const listQa= document.getElementById('inputQa');
const listOfItems = document.getElementById('listBook');

// When size is submitted by the user, call makeGrid()
//prevent the default, prevent  to reload the page on form submit.
const submit = document.getElementById('MakeCatalog');
  submit.addEventListener('submit', function (e){
    e.preventDefault();
    makeList();
  }
)


//var i = 0;
var selectedRowIndex = -1;

function makeList(){
    const row = document.createElement('tr');



    const columnItem = document.createElement('td');
    columnItem.innerHTML = listTitle.value;
    row.appendChild(columnItem);

    const columnQuantity = document.createElement('td');
    columnQuantity.innerHTML = listQa.value;
    row.appendChild(columnQuantity);

    const columnDelete = document.createElement('td');

    const deleteButton = document.createElement('input')
    deleteButton.type = 'button';
    deleteButton.value = 'Delete';
    deleteButton.addEventListener('click', function(event) {
      deleteRow(event)
    });

    columnDelete.appendChild(deleteButton);

    row.appendChild(columnDelete);

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
}
