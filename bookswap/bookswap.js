
/* script.js */
let requests = ["To Kill a Mockingbird", "1984", "The Great Gatsby", "Pride and Prejudice", "The Catcher in the Rye", "Brave New World", "The Hobbit", "The Alchemist"];
function displayRequests() {
    const list = document.getElementById('requestsList');
    list.innerHTML = '';
    requests.forEach((book, index) => {
        list.innerHTML += `<div class='card'>${book} <button class='button' onclick='removeRequest(${index})'>Remove</button></div>`;
    });
}
function addRequest() {
    const title = document.getElementById('requestTitle').value;
    if (title) {
        requests.push(title);
        document.getElementById('requestTitle').value = '';
        displayRequests();
    }
}
function removeRequest(index) {
    requests.splice(index, 1);
    displayRequests();
}
displayRequests();
