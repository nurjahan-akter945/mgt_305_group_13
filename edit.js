const clients = JSON.parse(localStorage.getItem("clients")) || [];

const editIndex = localStorage.getItem("editIndex");

const client = clients[editIndex];

// Fill the form
document.getElementById("clientId").value = client.clientId;
document.getElementById("clientName").value = client.clientName;
document.getElementById("companyName").value = client.companyName;
document.getElementById("email").value = client.email;
document.getElementById("phone").value = client.phone;
document.getElementById("serviceRequired").value = client.serviceRequired;
document.getElementById("projectStatus").value = client.projectStatus;
const form = document.getElementById("editForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    clients[editIndex] = {
        clientId: document.getElementById("clientId").value,
        clientName: document.getElementById("clientName").value,
        companyName: document.getElementById("companyName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        serviceRequired: document.getElementById("serviceRequired").value,
        projectStatus: document.getElementById("projectStatus").value
    };

    // Save updated data
    localStorage.setItem("clients", JSON.stringify(clients));

    // Remove the temporary edit index
    localStorage.removeItem("editIndex");

    alert("Client updated successfully!");

    // Go back to dashboard
    window.location.href = "dashboard.html";

});