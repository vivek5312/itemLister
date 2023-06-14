//alert("hello world");
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

//function add item
function addItem(e){
    e.preventDefault();

    //create input value
    let newItem=document.getElementById('item').value;

    //create new li
    let li=document.createElement('li');
    //add class
    li.className="list-group-item";
   //add text node
    li.appendChild(document.createTextNode(newItem));
    //add del button
    let delbtn=document.createElement('button');

    //add class
    delbtn.className="btn btn-danger btn-sm float-right delete";

    //add text node in button
    delbtn.appendChild(document.createTextNode('X'));
   //add edit button
   let editbtn=document.createElement('button');
   //add class name in edit btn
   editbtn.className="btn btn-edit btn-sm float-right edit";

   //add text node in edit button
   editbtn.appendChild(document.createTextNode("edit"));

   //append edit button to li
   li.appendChild(editbtn);
    //append button into li
    li.appendChild(delbtn);
    //append li into list
    itemList.appendChild(li);

}
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }