function addTask () {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered
    if (newTask != "") {
      // create new HTML list item
      var item = document.createElement("li");
      // add HTML for buttons and new task text
      // Note, need to use '' because of "" in HTML
      item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + '<input type="button" class="important"  onclick="important(this.parentNode)" value="!" />' +
      newTask;
      // add new item as part of existing list
      document.getElementById("tasks").appendChild(item);  
      
       /* Step 4 below here */
       input.value = "";
       input.placeholder = "Enter next task";
    }
  }
  
  
  
  // change styling used for given item
  function markDone (item) { 
      item.className = 'finished';
  }
  
  /* Step 7 below here */
  function remove (item) {
    // remove item completely from document
    if (item.className == 'finished'){
        item.remove();
    }
         else{
             alert("You didn't finish the task yet")
         }
  }
  
  /* Step 11 below here */
  function doAbout() {
      document.getElementById("divabout").innerHTML = "Author is Long Vu";
    
    
  }
  
  /* Step 14 below here */
  function clearAbout() {
    document.getElementById("divabout").innerHTML = "";
  }
  
  function important(item) {
      item.className = 'red';
  }