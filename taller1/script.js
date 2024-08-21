 
var button = document.getElementById('addTaskBtn');
var input = document.getElementById('taskInput');
var list = document.getElementById('taskList');

 
button.addEventListener('click', function() {
     
    var text = input.value;

     
    if (text) {
         
        var taskButton = document.createElement('button');
        var deleteButton = document.createElement('button');
         
          taskButton.textContent = text;
          deleteButton.textContent ="Borrar"
          
        deleteButton.addEventListener('click', function() {
             
            list.removeChild(taskButton);
            list.removeChild(deleteButton);
        });

         
        list.appendChild(taskButton);
        list.appendChild(deleteButton);

         
         
    }  
});
