const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

async function fetchTasks() {
  const res = await fetch("/api/tasks");
  const tasks = await res.json();
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) li.style.textDecoration = "line-through";
    li.onclick = () => toggleTask(task._id);
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = (e) => {
      e.stopPropagation();
      deleteTask(task._id);
    };
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

async function addTask() {
  const text = taskInput.value;
  if (!text.trim()) return;
  await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  taskInput.value = "";
  fetchTasks();
}

async function deleteTask(id) {
  await fetch(`/api/tasks/${id}`, { method: "DELETE" });
  fetchTasks();
}

async function toggleTask(id) {
  await fetch(`/api/tasks/${id}`, { method: "PUT" });
  fetchTasks();
}

fetchTasks();
