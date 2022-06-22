////select all items
var email = document.querySelector("#mail");
var userName = document.querySelector("#name");
var pass = document.querySelector("#password");
var btn = document.querySelector("#btn");
var bookList = document.querySelector("#book-list");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value == "" || userName.value == "" || pass.value == "") {
        console.log("vai kichu ekta den")
    }
    else {
        const newRow = document.createElement("tr");
        // console.log(newRow);
        ///creating new email
        const newEmail = document.createElement("th");
        newEmail.innerHTML = email.value;
        newRow.appendChild(newEmail);
        ///creating new name
        const newName = document.createElement("th");
        newName.innerHTML = userName.value;
        newRow.appendChild(newName);
        ///creating new password
        const newPass = document.createElement("th");
        newPass.innerHTML = pass.value;
        newRow.appendChild(newPass);
        bookList.appendChild(newRow);
    }
})