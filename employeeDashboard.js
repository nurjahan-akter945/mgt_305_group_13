// Get employees from localStorage
const employees = JSON.parse(localStorage.getItem("employees")) || [];

// Dashboard cards
document.getElementById("totalEmployees").textContent = employees.length;

let available = 0;
let busy = 0;
let onLeave = 0;

employees.forEach(function(employee){

    if(employee.employeeStatus === "Available"){
        available++;
    }
    else if(employee.employeeStatus === "Busy"){
        busy++;
    }
    else if(employee.employeeStatus === "On Leave"){
        onLeave++;
    }

});

document.getElementById("availableEmployees").textContent = available;
document.getElementById("busyEmployees").textContent = busy;
document.getElementById("leaveEmployees").textContent = onLeave;

// Display employees
const tableBody = document.querySelector("#employeeTable tbody");

function displayEmployees(employeeList){

    tableBody.innerHTML = "";

    employeeList.forEach(function(employee, index){

        const row = `
        <tr>
            <td>${employee.employeeId}</td>
            <td>${employee.employeeName}</td>
            <td>${employee.employeeRole}</td>
            <td>${employee.employeeStatus}</td>
            <td>
                <button onclick="editEmployee(${index})">Edit</button>
                <button onclick="deleteEmployee(${index})">Delete</button>
            </td>
        </tr>
        `;

        tableBody.innerHTML += row;

    });

}

displayEmployees(employees);

// Search
const searchEmployee = document.getElementById("searchEmployee");

searchEmployee.addEventListener("input", function(){

    const text = searchEmployee.value.toLowerCase();

    const filtered = employees.filter(function(employee){

        return(
            employee.employeeId.toString().includes(text) ||
            employee.employeeName.toLowerCase().includes(text) ||
            employee.employeeRole.toLowerCase().includes(text)
        );

    });

    displayEmployees(filtered);

});

// Delete
function deleteEmployee(index){

    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    employees.splice(index,1);

    localStorage.setItem("employees", JSON.stringify(employees));

    location.reload();

}

// Edit (we'll improve this later)
function editEmployee(index){

    alert("Employee edit page will be built next.");

}
const sidebar = document.querySelector(".sidebar");

const toggle = document.getElementById("toggleSidebar");

toggle.addEventListener("click",function(){

    sidebar.classList.toggle("collapsed");

});