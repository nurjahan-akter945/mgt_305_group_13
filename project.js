// Get clients and employees
const clients = JSON.parse(localStorage.getItem("clients")) || [];
const employees = JSON.parse(localStorage.getItem("employees")) || [];

console.log(clients);
console.log(employees);

// Select dropdowns
const clientSelect = document.getElementById("clientSelect");
const employeeSelect = document.getElementById("employeeSelect");

// Load clients
clients.forEach(function(client) {

    const option = document.createElement("option");
    option.value = client.clientId;
    option.textContent = client.clientName;

    clientSelect.appendChild(option);

});

// Load employees
employees.forEach(function(employee) {

    const option = document.createElement("option");
    option.value = employee.employeeId;
    option.textContent = employee.employeeName;

    employeeSelect.appendChild(option);

});

// Auto-fill service
clientSelect.addEventListener("change", function() {

    const selectedClient = clients.find(function(client) {
        return client.clientId === clientSelect.value;
    });

    if (selectedClient) {
        document.getElementById("service").value = selectedClient.serviceRequired;
    }

});
const projectForm = document.getElementById("projectForm");

projectForm.addEventListener("submit", function(event){

    event.preventDefault();

    const selectedClient = clients.find(client =>
        client.clientId === clientSelect.value
    );

    const selectedEmployee = employees.find(employee =>
        employee.employeeId === employeeSelect.value
    );

    const project = {

        projectId: document.getElementById("projectId").value,

        clientId: selectedClient.clientId,
        clientName: selectedClient.clientName,

        employeeId: selectedEmployee.employeeId,
        employeeName: selectedEmployee.employeeName,

        service: selectedClient.serviceRequired,

        priority: document.getElementById("priority").value,

        deadline: document.getElementById("deadline").value,

        status: document.getElementById("status").value

    };

    let projects = JSON.parse(localStorage.getItem("projects")) || [];

    projects.push(project);

    localStorage.setItem("projects", JSON.stringify(projects));

    alert("Project created successfully!");

    projectForm.reset();

});
