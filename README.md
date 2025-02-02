# **React Project: Counter, User Data Form & Rich Text Editor**

## **📌 Project Overview**
This project is a **React-based web application** that includes a **Counter Component**, a **User Data Form**, and a **Rich Text Editor**. The application also integrates **Material UI / Chakra UI / Next UI**, **React Spring for animations**, **React Router for navigation**, and **React Charts** for data visualization.

### **🔹 Features**
- **Counter Component** 📊  
  - Buttons to **increment, decrement, and reset**.
  - Background color **changes dynamically** based on count.
  - Reset restores background color to initial state.

- **User Data Form** 📝  
  - Collects user details: **Name, Address, Email, Phone**.
  - **Auto-generates a unique User ID**.
  - Saves data to **Local Storage / Redux Toolkit (RTK)**.
  - Alerts for **unsaved changes** if the user tries to close the browser.

- **Rich Text Editor** ✍️  
  - Displays **user data** in a formatted text editor.
  - Supports **bold, italic, underline, and lists**.
  - **Data persistence** on refresh.

- **(Optional) User Authentication & Dashboard** 🔒  
  - **Google Sign-In & Private Routes**.
  - **Dashboard Visualization** with **React Charts**.
  
---

## **📂 Project Structure**
```
📁 src/
 ├── 📁 components/
 │   ├── Counter.js        # Counter with background color change
 │   ├── UserForm.js       # Form for user data input
 │   ├── RichTextEditor.js # Rich text editor to display user data
 │
 ├── 📁 redux/
 │   ├── store.js         # Redux store configuration
 │   ├── userSlice.js     # Redux slice for user data state management
 │
 ├── 📁 pages/
 │   ├── HomePage.js      # Home Page
 │   ├── Dashboard.js     # Dashboard with charts & analytics
 │
 ├── App.js               # Main application file
 ├── index.js             # React entry point
 └── README.md            # Project documentation
```

---

## **🛠 State Management**
This project uses a mix of **React State (`useState`) and Redux Toolkit (RTK)** for state management.

### **📌 State Management Choices**
| Feature          | State Management |
|-----------------|-----------------|
| Counter         | `useState` (local state) |
| User Data Form  | `Redux Toolkit (RTK)` for global state |
| Rich Text Data  | `LocalStorage` for persistence |

### **🔹 Explanation**
- **Counter**: Simple component-level state using `useState`.
- **User Form**: Uses `Redux Toolkit (RTK)` to manage form data globally.
- **Rich Text Data**: Data is stored in `LocalStorage` to persist across sessions.

---

## **🔀 Routing (React Router)**
The project uses **React Router** for navigation.
```jsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
```

---

## **🎨 Animations & UI Framework**
- **React Spring**: Used for smooth animations.
- **Material UI / Chakra UI / Next UI**: Used for styling.

---

## **🚀 Installation & Setup**
1. Clone the repository:
   ```sh
   git clone <repo-url>
   ```
2. Navigate to the project folder:
   ```sh
   cd react-project
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the application:
   ```sh
   npm start
   ```
5. Open **`http://localhost:3000`** in your browser.

---

## **📌 Challenges & Learnings**
✅ Ensured **data persistence** for Rich Text Editor using `localStorage`.
✅ Implemented **unsaved changes alert** in User Form.
✅ Used **React Spring for smooth UI animations**.
✅ Learned **Redux Toolkit** for state management.

---

## **📜 License**
This project is open-source under the **MIT License**.

---

## **📞 Contact**
For any queries, feel free to reach out!

🔗 **LinkedIn:** [Your Profile](https://linkedin.com/in/yourprofile)  
📧 **Email:** your.email@example.com  
