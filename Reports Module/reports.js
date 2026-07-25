const clients = JSON.parse(localStorage.getItem("clients")) || [];
const employees = JSON.parse(localStorage.getItem("employees")) || [];
const projects = JSON.parse(localStorage.getItem("projects")) || [];

// Totals
document.getElementById("totalClients").textContent = clients.length;
document.getElementById("totalEmployees").textContent = employees.length;
document.getElementById("totalProjects").textContent = projects.length;

// Project Status
let pending = 0;
let ongoing = 0;
let completed = 0;

projects.forEach(function(project){

    if(project.status === "Pending"){
        pending++;
    }
    else if(project.status === "Ongoing"){
        ongoing++;
    }
    else if(project.status === "Completed"){
        completed++;
    }

});

document.getElementById("pendingProjects").textContent = pending;
document.getElementById("ongoingProjects").textContent = ongoing;
document.getElementById("completedProjects").textContent = completed;

// Employee Status
let available = 0;

employees.forEach(function(employee){

    if(employee.employeeStatus === "Available"){
        available++;
    }

});

document.getElementById("availableEmployees").textContent = available;

// Most Requested Service
let services = {};

clients.forEach(function(client){

    let service = client.serviceRequired;

    services[service] = (services[service] || 0) + 1;

});

let topService = "-";
let max = 0;

for(let service in services){

    if(services[service] > max){

        max = services[service];
        topService = service;

    }

}

document.getElementById("topService").textContent = topService;
const sidebar = document.querySelector(".sidebar");

const toggle = document.getElementById("toggleSidebar");

toggle.addEventListener("click",function(){

    sidebar.classList.toggle("collapsed");

});