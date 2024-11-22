
// Department and Employee Data
const departments = [
    {
        name: "English",
        employees: [
            { name: "Akibul Hassan", email: "akibul41@gmail.com", image: "akibul.jpg" },
            { name: "Sarah Tahmeen", email: "email2@college.com", image: "Sarah.jpeg" },
            { name: "Shamima Ahmed", email: "email3@college.com", image: "shamima.jpeg" },
        ],
    },
    {
        name: "Assamese",
        employees: [
            { name: "Person A", email: "emailA@college.com", image: "placeholder.jpg" },
            { name: "Person B", email: "emailB@college.com", image: "placeholder.jpg" },
            { name: "Person C", email: "emailC@college.com", image: "placeholder.jpg" },
        ],
    },
    {
        name: "Education",
        employees: [
            { name: "Person D", email: "emailD@college.com", image: "placeholder.jpg" },
            { name: "Person E", email: "emailE@college.com", image: "placeholder.jpg" },
            { name: "Person F", email: "emailF@college.com", image: "placeholder.jpg" },
        ],
    },
    {
        name: "Political Science",
        employees: [
            { name: "Person G", email: "emailG@college.com", image: "placeholder.jpg" },
            { name: "Person H", email: "emailH@college.com", image: "placeholder.jpg" },
            { name: "Person I", email: "emailI@college.com", image: "placeholder.jpg" },
        ],
    },
    {
        name: "Economics",
        employees: [
            { name: "Person J", email: "emailJ@college.com", image: "placeholder.jpg" },
            { name: "Person K", email: "emailK@college.com", image: "placeholder.jpg" },
            { name: "Person L", email: "emailL@college.com", image: "placeholder.jpg" },
        ],
    },
    {
        name: "History",
        employees: [
            { name: "Person M", email: "emailM@college.com", image: "placeholder.jpg" },
            { name: "Person N", email: "emailN@college.com", image: "placeholder.jpg" },
            { name: "Person O", email: "emailO@college.com", image: "placeholder.jpg" },
        ],
    },
];

// Generate Department Sections
const container = document.getElementById("departments-container");

departments.forEach(department => {
    const departmentDiv = document.createElement("div");
    departmentDiv.classList.add("department");

    const header = document.createElement("div");
    header.classList.add("department-header");
    header.innerHTML = `${department.name} <span class="icon">+</span>`;
    header.addEventListener("click", () => toggleDepartment(header));

    const content = document.createElement("div");
    content.classList.add("department-content");

    department.employees.forEach(employee => {
        const employeeDiv = document.createElement("div");
        employeeDiv.classList.add("employee");

        employeeDiv.innerHTML = `
            <div class="employee-detail">
                <img src="${employee.image}" alt="${employee.name}">
                <div class="employee-info">
                    <span class="employee-name">${employee.name}</span>
                    <span class="employee-contact">${employee.email}</span>
                </div>
            </div>
        `;
        content.appendChild(employeeDiv);
    });

    departmentDiv.appendChild(header);
    departmentDiv.appendChild(content);
    container.appendChild(departmentDiv);
});

// Toggle Function
function toggleDepartment(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.icon');

    if (content.style.display === "block") {
        content.style.display = "none";
        icon.textContent = "+";
    } else {
        content.style.display = "block";
        icon.textContent = "-";
    }
}
