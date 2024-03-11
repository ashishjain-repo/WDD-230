const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    const value = input.value;
    if (value == "") {
        alert("Enter a name");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    list.appendChild(li);
    input.focus();
    input.value = '';
});