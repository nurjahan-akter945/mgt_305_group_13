// Get clients from localStorage
const clients = JSON.parse(localStorage.getItem("clients")) || [];
// Total Clients
document.getElementById("totalClients").textContent = clients.length
// Count project statuses
let pending = 0;
let ongoing = 0;
let completed = 0;

clients.forEach(function(client){

    if(client.projectStatus === "Pending"){
        pending++;
    }

    else if(client.projectStatus === "Ongoing"){
        ongoing++;
    }

    else if(client.projectStatus === "Completed"){
        completed++;
    }

});

// Display the counts
document.getElementById("pendingProjects").textContent = pending;
document.getElementById("ongoingProjects").textContent = ongoing;
document.getElementById("completedProjects").textContent = completed;

const tableBody = document.querySelector("#clientTable tbody");

function displayClients(clientList) {

    tableBody.innerHTML = "";

    clientList.forEach(function(client, index) {

        const row = `
        <tr>
            <td>${client.clientId}</td>
            <td>${client.clientName}</td>
            <td>${client.companyName}</td>
            <td>${client.serviceRequired}</td>
            <td>${client.projectStatus}</td>
            <td>
                <button onclick="editClient(${index})">Edit</button>
                <button onclick="deleteClient(${index})">Delete</button>
            </td>
        </tr>
        `;

        tableBody.innerHTML += row;
    });

}

// Display all clients when the page loads
displayClients(clients);
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    const filteredClients = clients.filter(function(client){

        return (
            client.clientId.toString().includes(searchText) ||
            client.clientName.toLowerCase().includes(searchText) ||
            client.companyName.toLowerCase().includes(searchText)
        );

    });

    displayClients(filteredClients);

});
// Update a client
function editClient(index) {

    // Save the selected client's index
    localStorage.setItem("editIndex", index);

    // Go to the edit page
    window.location.href = "edit.html";

}
// Delete a client
function deleteClient(index) {

    // Get existing clients
    let clients = JSON.parse(localStorage.getItem("clients")) || [];

    // Remove the selected client
    clients.splice(index, 1);

    // Save updated list
    localStorage.setItem("clients", JSON.stringify(clients));

    // Reload the page
    location.reload();
}
const sidebar = document.querySelector(".sidebar");

const toggle = document.getElementById("toggleSidebar");

toggle.addEventListener("click",function(){

    sidebar.classList.toggle("collapsed");

});