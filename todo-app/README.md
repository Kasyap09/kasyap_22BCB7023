# 📝 Full Stack To-Do List Web App

A sleek and professional full-stack To-Do List application built using **Node.js**, **Express**, **MongoDB**, and **Vanilla JavaScript**. This app allows users to register/login, add tasks with due dates, mark them as done, delete tasks, and visually distinguish overdue tasks. The UI is inspired by modern dashboards used in top MNCs.

---

## 🚀 Features

- 🔐 **User Authentication** (Register & Login with JWT)
- 📆 **Add Tasks with Due Date** using a calendar picker
- ✅ **Mark Tasks as Completed**
- 🗑️ **Delete Tasks** with confirmation
- ⚠️ **Overdue Task Highlighting** (Red background)
- 🧾 **Responsive UI** with a clean, modern dashboard design
- 💾 **MongoDB Integration** for persistent task storage

---

## 📁 Folder Structure

to-do-app/
├── models/
│ └── Task.js # Mongoose schema for tasks
├── routes/
│ └── tasks.js # Express routes for task CRUD operations
├── public/
│ ├── index.html # Login/Register UI
│ ├── dashboard.html # Main dashboard UI
│ └── style.css # Custom styles (optional)
├── server.js # Main backend server
├── .env # Environment variables
├── package.json # Project dependencies
└── README.md # Project documentation


---

## ⚙️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using Mongoose)
- **Authentication:** JSON Web Token (JWT)
- **Deployment Ready:** Can be hosted on Render, Railway, or Heroku

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Kasyap09/to-do-app.git
cd to-do-app
2. Install Dependencies
npm install
3. Set Up Environment Variables
Create a .env file in the root directory:
PORT=5000
MONGO_URI=mongodb://localhost:27017/todolist
JWT_SECRET=yourSuperSecretJWTKey
4. Run the Server
node server.js
Open your browser and go to: http://localhost:5000

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📄 License
This project is licensed under the MIT License.
Feel free to use, modify, and share this project.

👨‍💻 Author
K Srinivasa Kasyap
GitHub: Kasyap09
Email:kalavakolanu.srinivaskashyap@gmail.com

