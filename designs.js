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

function makeList(){
    const li = document.createElement('li');
    li.innerHTML = listTitle.value;
    listOfItems.append(li);
    listTitle.value ='';

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
