# 🎓 Student Management System  
A simple **Basic CRUD (Create, Read, Update, Delete)** application built using **HTML, CSS, JavaScript (Frontend)** and **Node.js + Express (Backend)**.  
This project was created as part of a weekly assignment.

---

## 🚀 Features

### ✔️ Add Student  
- Input fields: **Name**, **Age**, **Course**  
- JavaScript validation  
- Sends data to backend using **Fetch API**

### ✔️ Display Student List  
- Students are fetched from backend API  
- Students appear in a clean table format  
- Each row contains **Edit** and **Delete** buttons

### ✔️ Edit Student  
- Updates student data in the backend  
- Validates updated values

### ✔️ Delete Student  
- Deletes a student from backend  
- Instantly updates the frontend table

---

## 🛠️ Tech Stack

### **Frontend**
- HTML  
- CSS  
- JavaScript

### **Backend**
- Node.js  
- Express.js

### **Database**
- Temporary **Array-based Storage** (No Database Required)

---

## 📁 Project Structure

Student_Management_System/
│── backend/
│ ├── server.js
│ └── package.json
│
└── frontend/
├── index.html
├── style.css
└── script.js


---

## 🔌 Backend API Endpoints

### **1️⃣ Add Student (POST)**
POST /students

shell
Copy code

### **2️⃣ Get All Students (GET)**
GET /students

markdown
Copy code

### **3️⃣ Update Student (PUT)**
PUT /students/:id

markdown
Copy code

### **4️⃣ Delete Student (DELETE)**
DELETE /students/:id

yaml
Copy code

---

## ▶️ How to Run the Project

### **Backend**
cd backend
npm install
node server.js

arduino
Copy code

Server runs by default at:
http://localhost:5000

markdown
Copy code

### **Frontend**
Simply open:
frontend/index.html

yaml
Copy code

---

## 📝 Assignment Completed By  
**Bishwajeet Singh**  
Student, CSE

---

## ⭐ If you like this project, give it a star on GitHub!

