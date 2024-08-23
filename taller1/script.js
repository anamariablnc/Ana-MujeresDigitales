 
var button = document.getElementById('addTaskBtn');
var input = document.getElementById('taskInput');
var list = document.getElementById('taskList');

 
button.addEventListener('click', function() {
    //Inicializamos la variable con el texto ingresado en el textField
    var text = input.value;  

    
    if (text) {
         
        var taskItem = document.createElement('li');
        
         //Inicializamos la variable con un boton nuevo
        var taskButton = document.createElement('button');
        //Añadimos al boton el texto que se ingreso en el input
        taskButton.textContent = text;
        
         //Inicializamos la variable con un boton nuevo 
        var deleteButton = document.createElement('button');
        //Añadimos el texto en el boton con el texto "Borrar"
        deleteButton.textContent = 'Borrar';
        
         //Ponemos a la escucha el boton de tarea creada
          //Al hacer click en el se ira a una nueva pagina 
           //Que tirnr como titulo en nombre de la tarea
        taskButton.addEventListener('click', function() {
            var newWindow = window.open('', '_blank');
            newWindow.document.write('<html><head><title>' + text + '</title></head><body><h1>' + text + '</h1></body></html>');
        });

         //Ponemos a la escucha el boton de borrar que al hacer click va a eliminar
         //El boton de la tarea creada y el boton de eliminar
        deleteButton.addEventListener('click', function() {
            list.removeChild(taskItem);  
        });

        
        //Agregamos los dos botones al item de la lista
        taskItem.appendChild(taskButton);
        taskItem.appendChild(deleteButton);
        
    //Añadimos la lista  
        list.appendChild(taskItem);

         
    }
});

