const apiUrl = "https://student-management-system-w15m.onrender.com/students";



// Fetch students on page load
window.onload = fetchStudents;

// ---------------------------
// 1. ADD STUDENT
// ---------------------------
document.getElementById("studentForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const course = document.getElementById("course").value.trim();

    // Validation
    if (!name || !age || !course) {
        alert("All fields are required");
        return;
    }

    if (isNaN(age)) {
        alert("Age must be a number");
        return;
    }

    const studentData = { name, age, course };

    // Send POST request to backend
    await fetch(apiURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
    });

    // Reset form
    document.getElementById("studentForm").reset();

    // Refresh list
    fetchStudents();
});


// ---------------------------
// 2. FETCH ALL STUDENTS
// ---------------------------
async function fetchStudents() {
    const res = await fetch(apiURL);
    const students = await res.json();

    const tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "";

    students.forEach((student) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>
                <button onclick="editStudent(${student.id})" class="editBtn">Edit</button>
                <button onclick="deleteStudent(${student.id})" class="deleteBtn">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}


// ---------------------------
// 3. DELETE STUDENT
// ---------------------------
async function deleteStudent(id) {
    await fetch(`${apiURL}/${id}`, {
        method: "DELETE"
    });

    fetchStudents();
}


// ---------------------------
// 4. EDIT STUDENT
// ---------------------------
async function editStudent(id) {
    const newName = prompt("Enter new name:");
    const newAge = prompt("Enter new age:");
    const newCourse = prompt("Enter new course:");

    if (!newName || !newAge || !newCourse) {
        alert("All fields are required");
        return;
    }

    if (isNaN(newAge)) {
        alert("Age must be a number");
        return;
    }

    const updatedData = {
        name: newName,
        age: newAge,
        course: newCourse
    };

    await fetch(`${apiURL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
    });

    fetchStudents();
}
