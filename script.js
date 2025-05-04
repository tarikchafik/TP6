document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        input.value = ""; 
    }
});

function addTask(text) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${text}</span>
        <div class="actions">
            <button class="done">✔</button>
            <button class="delete">🗑</button>
        </div>
    `;

   
    li.querySelector(".done").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

   
    li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
    });

    document.getElementById("task-list").appendChild(li);
}
