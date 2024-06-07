     function addTask() {
            var input = document.getElementById("taskInput");
            var task = input.value;
            if (task.trim() !== "") {
                var ul = document.getElementById("taskList");
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(task));
                var deleteBtn = document.createElement("button");
                deleteBtn.appendChild(document.createTextNode("X"));
                deleteBtn.setAttribute("class", "delete-btn");
                deleteBtn.onclick = function() {
                    ul.removeChild(li);
                };
                li.appendChild(deleteBtn);
                ul.appendChild(li);
                input.value = "";
            }
        }


        function sorting(){
            
        }