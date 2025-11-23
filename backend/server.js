const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// API
let students = [];
let idCounter = 1;

app.post("/students", (req, res) => {
    const { name, age, course } = req.body;
    if (!name || !age || !course) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const newStudent = { id: idCounter++, name, age, course };
    students.push(newStudent);
    res.json({ message: "Student added", student: newStudent });
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    students = students.filter(s => s.id !== id);
    res.json({ message: "Student deleted" });
});

// health
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
