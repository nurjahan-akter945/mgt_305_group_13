const form = document.getElementById("clientForm");

form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Create a client object
    const client = {
        clientId: document.getElementById("clientId").value,
        clientName: document.getElementById("clientName").value,
        companyName: document.getElementById("companyName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        serviceRequired: document.getElementById("serviceRequired").value,
        projectStatus: document.getElementById("projectStatus").value
    };

    // Get existing clients
    let clients = JSON.parse(localStorage.getItem("clients")) || [];

    // Add new client
   clients.push(client);

localStorage.setItem("clients", JSON.stringify(clients));

alert("Client added successfully!");

window.location.href = "clientDashboard.html";
});

