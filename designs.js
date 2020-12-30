// Select color input
//const color = document.getElementById('colorPicker');
// Select size input
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


var i = 0;

function makeList(){
    const row = document.createElement('tr');

    const columnNumber = document.createElement('td');
    columnNumber.innerHTML = ++i;
    row.appendChild(columnNumber);

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
    deleteButton.addEventListener('click',function(event) {
      deleteRow(event)
    });

    columnDelete.appendChild(deleteButton);

    //columnDelete.innerHTML = '<input type="button" id="deleteRow" value= "Delete" onclick="deleteRow(event)">';
    row.appendChild(columnDelete);

    listOfItems.append(row);
    listTitle.value ='';
    listQa.value = '1';

}

function deleteRow(event){
  const delButton = event.target;
  const rowIndex = delButton.parentElement.parentElement.rowIndex
  listOfItems.deleteRow(rowIndex);
}

function makeGrid() {

 //The old grid should be cleared
 // before creating the new one
  //canvas.innerHTML = '';
  //    Draw rows
  //for (x = 0; x < gridHeight.value; x++) {
  //  var row = document.createElement('tr');
    //   Draw columns
  //  for (y = 0; y < gridWidth.value; y++) {
    //  var column = document.createElement('td');
    //  row.appendChild(column);
    //  column.addEventListener('click',function(event){
    //    event.target.style.backgroundColor= color.value;
    //  })
//    }
  //  canvas.append(row);
//  }
}
