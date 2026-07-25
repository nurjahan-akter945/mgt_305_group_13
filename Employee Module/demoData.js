// =========================
// Demo Clients
// =========================

if (!localStorage.getItem("clients")) {

    const clients = [

        {
            clientId: "C001",
            clientName: "John Smith",
            companyName: "Google LLC",
            email: "john@google.com",
            phone: "+8801700000001",
            serviceRequired: "Data Annotation",
            projectStatus: "Ongoing"
        },

        {
            clientId: "C002",
            clientName: "Sarah Lee",
            companyName: "Microsoft",
            email: "sarah@microsoft.com",
            phone: "+8801700000002",
            serviceRequired: "Data Analysis",
            projectStatus: "Pending"
        }

    ];

    localStorage.setItem("clients", JSON.stringify(clients));

}


// =========================
// Demo Employees
// =========================

if (!localStorage.getItem("employees")) {

    const employees = [

        {
            employeeId: "E001",
            employeeName: "Rahim",
            employeeEmail: "rahim@gmail.com",
            employeePhone: "01711111111",
            employeeRole: "Data Analyst",
            employeeStatus: "Available"
        },

        {
            employeeId: "E002",
            employeeName: "Karim",
            employeeEmail: "karim@gmail.com",
            employeePhone: "01722222222",
            employeeRole: "Data Annotator",
            employeeStatus: "Busy"
        }

    ];

    localStorage.setItem("employees", JSON.stringify(employees));

}


// =========================
// Demo Projects
// =========================

if (!localStorage.getItem("projects")) {

    const projects = [

        {
            projectId: "P001",
            clientId: "C001",
            clientName: "John Smith",

            employeeId: "E001",
            employeeName: "Rahim",

            service: "Data Annotation",

            priority: "High",

            deadline: "2026-08-15",

            status: "Ongoing"
        },

        {
            projectId: "P002",
            clientId: "C002",
            clientName: "Sarah Lee",

            employeeId: "E002",
            employeeName: "Karim",

            service: "Data Analysis",

            priority: "Medium",

            deadline: "2026-08-25",

            status: "Pending"
        }

    ];

    localStorage.setItem("projects", JSON.stringify(projects));

}