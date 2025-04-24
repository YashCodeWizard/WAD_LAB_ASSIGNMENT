# 📚 Student Management API

A simple RESTful API built using **Express.js** and **MongoDB** to manage student records.

---

## 🚀 Features

- 📝 Add a new student
- 🔍 Retrieve all students or filter by marks
- 🛠️ Update student details
- ❌ Delete a student by ID
- 🧹 Bulk delete students with marks below a threshold

---

## 🛠️ Tech Stack

- ⚙️ Node.js
- 🌐 Express.js
- 🍃 MongoDB (with Mongoose)
- 📦 body-parser

---

## 📦 Installation

1. **Clone the repo**  
   git clone https://github.com/your-username/student-api.git
   cd student-api



## 🛠️ Setup Instructions

### 📦 Install Dependencies
```bash
npm install express
```

---

### ⚙️ Configure MongoDB
Replace the placeholder string in your code with your actual MongoDB URI:
```js
mongoose.connect('insert your mongo string with password')
```

---

### 🚀 Run the Server
```bash
node index.js
```

Server runs at: [http://localhost:3000]

