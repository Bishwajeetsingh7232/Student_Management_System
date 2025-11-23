const path = require("path");
app.use(express.static(path.join(__dirname, "../frontend")));


const express = require("express");
const cors = require("cors");
const app = express();
// const PORT = 5000;
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

// Root route


// Temporary database (array)
let students = [];
let idCounter = 1;

// ---------------------------
// 1. ADD Student (POST)
// ---------------------------
app.post("/students", (req, res) => {
    const { name, age, course } = req.body;

    if (!name || !age || !course) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (isNaN(age)) {
        return res.status(400).json({ message: "Age must be a number" });
    }

    const newStudent = {
        id: idCounter++,
        name,
        age,
        course
    };

    students.push(newStudent);

    res.status(200).json({ message: "Student added successfully", student: newStudent });
});


// ---------------------------
// 2. GET All Students
// ---------------------------
app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// ---------------------------
// 3. UPDATE Student (PUT)
// ---------------------------
app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age, course } = req.body;

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    if (!name || !age || !course) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (isNaN(age)) {
        return res.status(400).json({ message: "Age must be a number" });
    }

    student.name = name;
    student.age = age;
    student.course = course;

    res.status(200).json({ message: "Student updated successfully", student });
});

// ---------------------------
// 4. DELETE Student
// ---------------------------
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    students.splice(index, 1);

    res.status(200).json({ message: "Student deleted successfully" });
});

app.get("/", (req, res) => {
    res.send("Backend is running ✅");
});

// Health check
app.get("/health", (req, res) => {
    res.json({ status: "ok", uptime: process.uptime() });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});


// Start server
app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
