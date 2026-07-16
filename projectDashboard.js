// Get projects from localStorage
const projects = JSON.parse(localStorage.getItem("projects")) || [];

// Dashboard Cards
document.getElementById("totalProjects").textContent = projects.length;

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
const tableBody = document.querySelector("#projectTable tbody");

function displayProjects(projectList){

    tableBody.innerHTML = "";

    projectList.forEach(function(project, index){

        const row = `
        <tr>
            <td>${project.projectId}</td>
            <td>${project.clientName}</td>
            <td>${project.employeeName}</td>
            <td>${project.service}</td>
            <td>${project.deadline}</td>
            <td>${project.status}</td>
            <td>
                <button onclick="editProject(${index})">Edit</button>
                <button onclick="deleteProject(${index})">Delete</button>
            </td>
        </tr>
        `;

        tableBody.innerHTML += row;

    });

}

displayProjects(projects);
const searchProject = document.getElementById("searchProject");

searchProject.addEventListener("input", function(){

    const text = searchProject.value.toLowerCase();

    const filtered = projects.filter(function(project){

        return(
            project.projectId.toLowerCase().includes(text) ||
            project.clientName.toLowerCase().includes(text) ||
            project.employeeName.toLowerCase().includes(text)
        );

    });

    displayProjects(filtered);

});
function deleteProject(index){

    let projects = JSON.parse(localStorage.getItem("projects")) || [];

    projects.splice(index,1);

    localStorage.setItem("projects", JSON.stringify(projects));

    location.reload();

}

function editProject(index){

    alert("Project edit page will be built next.");

}