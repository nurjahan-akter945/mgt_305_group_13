const form = document.getElementById("employeeForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const employee = {
        employeeId: document.getElementById("employeeId").value,
        employeeName: document.getElementById("employeeName").value,
        employeeEmail: document.getElementById("employeeEmail").value,
        employeePhone: document.getElementById("employeePhone").value,
        employeeRole: document.getElementById("employeeRole").value,
        employeeStatus: document.getElementById("employeeStatus").value
    };

    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    employees.push(employee);

    localStorage.setItem("employees", JSON.stringify(employees));

    alert("Employee added successfully!");

    form.reset();

});