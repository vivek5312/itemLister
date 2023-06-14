//alert("hello world");
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
//let itemList2 =document.getElementById('secondItem')

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
//filter function calling
filter.addEventListener('keyup', filterItems);
//filter.addEventListener('keyup', filterItems1);
//function add item
function addItem(e){
    e.preventDefault();

    //create input value
    let newItem=document.getElementById('item').value;
    let it = document.getElementById('secondItem').value;

    //create new li
    let li=document.createElement('li');
    //add class
    li.className="list-group-item";
   //add text node
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode( it));
    console.log(li);
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

  function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');

    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.childNodes[0].textContent;
      var itemDescription = item.childNodes[1].textContent;
      var combinedText = itemName.toLowerCase() + ' ' + itemDescription.toLowerCase();
  
      if (combinedText.indexOf(text) !== -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  } 
      
   
/*function filterItems1(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
   
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.childNodes[1].textContent;
     
  
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } 
      else{
        item.style.display='none';
      }  
      
    });
  
  }*/