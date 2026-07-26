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

// Create Client button
const createBtn = document.createElement("button");

createBtn.textContent = "+ Create Client";

createBtn.style.width = "auto";
createBtn.style.marginBottom = "20px";
createBtn.style.padding = "12px 20px";

createBtn.addEventListener("click", function () {

    window.location.href = "client.html";  

});

// Insert button before the search box
const searchBox = document.querySelector(".search-box");
searchBox.parentNode.insertBefore(createBtn, searchBox);
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
                <button onclick="editClient(${index})">Update</button>
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
    window.location.href = "edit_client.html";

    
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


