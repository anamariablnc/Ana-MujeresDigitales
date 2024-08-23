// Get elements from the DOM
var button = document.getElementById('addTaskBtn');
var input = document.getElementById('taskInput');
var list = document.getElementById('taskList');

// Add event listener to the Add Task button
button.addEventListener('click', function() {
    var text = input.value; // Get the text from the input

    if (text) {
        // Create a new list item
        var taskItem = document.createElement('li');
        
        // Create a button for the task text
        var taskButton = document.createElement('button');
        taskButton.textContent = text;
        
        // Create a button to delete the task
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Borrar';
        
        // Event listener for task button to open a new window
        taskButton.addEventListener('click', function() {
            var newWindow = window.open('', '_blank');
            newWindow.document.write('<html><head><title>' + text + '</title></head><body><h1>' + text + '</h1></body></html>');
        });

        // Event listener for delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(taskItem); // Remove the list item
        });

        // Add the buttons to the list item
        taskItem.appendChild(taskButton);
        taskItem.appendChild(deleteButton);
        
        // Add the list item to the list
        list.appendChild(taskItem);

        // Clear the input field
        input.value = '';
    }
});

