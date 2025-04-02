![image (9)](https://github.com/user-attachments/assets/5cf7fc4f-5404-404f-9d20-a9514164ee53)# **React Project: Counter, User Data Form & Rich Text Editor**

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
 |   ├── counterSlice.js  # Redux slice for counter
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
| User Data Form  | `useState` (local state) |
| Rich Text Data  | `LocalStorage` for persistence |

### **🔹 Explanation**
- **Counter**: Simple component-level state using `useState`.
- **User Form**: Uses `Redux Toolkit (RTK)` to manage form data globally.
- **Rich Text Data**: Data is stored in `LocalStorage` to persist across sessions.

---

## **🎨 Animations & UI Framework**
- **React Spring**: Used for smooth animations.
- **Material UI**: Used for styling.

---

## **🎨 Demo**
![Presentation1](https://github.com/user-attachments/assets/594fad88-3919-4d01-918c-d246ef1c2a80)

---
## **🚀 Installation & Setup**
1. Clone the repository:
   ```sh
   git clone [<repo-url>](https://github.com/rakshit232001/assignment.git)
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

---
![U<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <defs><style>.cls-1{fill:#fff;}.cls-2{fill:#e2231a;}</style>
          </defs>
          <g id="Layer_1-2">
            <rect class="cls-2" width="1000" height="1000"></rect>
            <path class="cls-1" d="m273.4,485.79h-28.31l-32.5-57.85c-2.75-5.4-4.94-9.83-6.73-13.99.43,11.48.74,30.05.74,42.51v29.33h-21.55v-106.21h28.3l31.73,56.47c2.53,4.42,5.14,9.62,7.56,15.03-.46-12.2-.78-31.8-.78-44.18v-27.32h21.55v106.21Z"></path>
            <path class="cls-1" d="m320.73,405.44c-22.42,0-37.48,16.73-37.48,41.64,0,26.71,13.08,40.25,38.87,40.25,9.29,0,19.53-1.82,28.11-5l.87-.33-2.5-17.31-1.36.55c-7.09,2.87-14.6,4.38-21.73,4.38s-12.13-1.58-15.35-4.83c-2.98-3.01-4.48-7.53-4.58-13.79h47.07l.17-.95c.71-3.91.79-8.99.79-10.98,0-21.06-12.29-33.63-32.87-33.63Zm-14.68,30.17c1.36-8.3,6.48-13.39,13.61-13.39,3.54,0,6.51,1.13,8.58,3.26,2.25,2.32,3.45,5.81,3.51,10.13h-25.7Z"></path>
            <path class="cls-1" d="m452.99,485.79h-23.08l-11.35-34.66c-1.27-4.44-2.32-8.5-3.31-12.73-1.37,5.61-2.81,10.36-4.19,14.72l-9.94,32.67h-22.03l-24.1-78.81h23.98l8.4,29.78c.49,1.86.99,3.7,1.49,5.57,1.12,4.19,2.28,8.49,3.37,12.83,1.33-6.18,2.89-11.65,4.61-17.49l9.5-30.69h20.62l9.64,29.74c1.98,6.64,3.74,12.53,5.18,18.62,1.28-5.95,2.68-11.48,4.31-17.64l9.02-30.72h22.61l-24.74,78.81Z"></path>
            <path class="cls-1" d="m519.99,485.79h-22.32v-37.53l-33.17-68.69h24.45l14,30.53c2.25,5.01,4.29,9.89,6.18,14.85,2.09-5.39,4.79-11.2,7.42-16.85l13.4-28.53h23.83l-33.79,68.54v37.68Z"></path>
            <path class="cls-1" d="m578.48,405.44c-23.7,0-40.25,17.38-40.25,42.25s12.75,39.63,36.86,39.63,40.26-17.83,40.26-42.4-13.09-39.48-36.87-39.48Zm-1.69,62.8c-10.72,0-15.93-7.37-15.93-22.55s8.75-21.32,16.24-21.32c10.51,0,15.63,7.08,15.63,21.63,0,13.72-6.11,22.24-15.94,22.24Z"></path>
            <path class="cls-1" d="m647.72,485.79h-22.01v-78.81h20.93v1.15c0,2.31-.17,5.64-.54,9.19,5.12-8.6,13.02-12.78,22.73-11.87l1.1.1-1.04,21.68-1.31-.26c-5.46-1.06-9.65-.32-12.81,2.28-4.69,3.85-7.06,11.98-7.06,24.14v32.4Z"></path>
            <polygon class="cls-1" points="749.06 485.79 721.59 485.79 699.68 450.79 699.68 485.79 677.66 485.79 677.66 371.11 699.68 371.11 699.68 436.34 720.24 406.98 747.2 406.98 719.5 443.11 749.06 485.79"></polygon>
            <rect class="cls-1" x="747.2" y="432.84" width="40.17" height="18.17"></rect>
            <path class="cls-1" d="m214.06,511.73c-11.33,0-20.2.2-27.93.62l-1.09.05v106.15h22.32v-36.5c2.09.18,4.08.18,5.62.18,24.61,0,41.79-15.29,41.79-37.18s-14.84-33.32-40.71-33.32Zm-2,51.57c-1.5,0-3.1-.11-4.7-.31v-32.54c1.92-.09,3.88-.09,5.93-.09,12.21,0,18.39,5.36,18.39,15.93s-7.52,16.86-19.62,17.01Z"></path>
            <path class="cls-1" d="m284.95,618.56h-22.01v-78.81h20.94v1.15c0,2.32-.17,5.64-.54,9.19,5.13-8.6,13.02-12.78,22.73-11.87l1.1.1-1.04,21.68-1.31-.26c-5.45-1.07-9.65-.33-12.81,2.28-4.69,3.85-7.06,11.98-7.06,24.14v32.4Z"></path>
            <path class="cls-1" d="m347.43,538.2c-22.42,0-37.48,16.73-37.48,41.64,0,26.71,13.08,40.26,38.87,40.26,9.29,0,19.53-1.83,28.11-5l.87-.32-2.5-17.31-1.36.55c-7.09,2.86-14.6,4.38-21.73,4.38s-12.13-1.58-15.35-4.84c-2.99-3.01-4.49-7.53-4.58-13.78h47.06l.18-.95c.71-3.91.79-8.98.79-10.98,0-21.06-12.29-33.63-32.87-33.63Zm-14.68,30.17c1.36-8.29,6.49-13.39,13.61-13.39,3.54,0,6.51,1.13,8.58,3.26,2.25,2.32,3.46,5.8,3.51,10.13h-25.7Z"></path>
            <path class="cls-1" d="m408.63,620.1c-6.54,0-12.71-.73-17.4-2.05l-.92-.26,1.61-19.02,1.47.64c4.38,1.9,10.16,2.98,15.85,2.98,6.78,0,11.16-2.81,11.16-7.16,0-4.62-4.19-6.3-11.03-8.68-8.94-3.09-20.06-6.95-20.06-22.88,0-12.39,8.84-25.63,33.63-25.63,4.25,0,9.53.59,14.09,1.56l.98.21-1.07,17.83-1.39-.42c-4.25-1.26-9.06-1.95-13.53-1.95s-10.08,1.16-10.08,6.7c0,4.37,4.24,6.15,11.17,8.68,9.08,3.32,20.38,7.46,20.38,22.87s-14.01,26.56-34.86,26.56"></path>
            <path class="cls-1" d="m495.86,538.2c-8.97,0-16.63,3.54-21.38,9.67.32-3.18.52-6.76.52-9.9v-34.1h-22.01v112.25l.84.23c9.21,2.59,18.09,3.74,28.79,3.74,26.25,0,42.56-17.19,42.56-44.87,0-23.53-10.69-37.02-29.32-37.02Zm-11.7,63.88c-3.68,0-6.62-.34-9.16-1.08v-20.7c0-11.38,5.37-23.48,15.32-23.48,5.12,0,11.93,2.12,11.93,20.4,0,16.27-6.26,24.86-18.09,24.86Z"></path>
            <path class="cls-1" d="m685.61,538.2c-22.42,0-37.48,16.73-37.48,41.64,0,26.71,13.08,40.26,38.87,40.26,9.29,0,19.53-1.83,28.1-5l.88-.32-2.5-17.31-1.36.55c-7.09,2.86-14.6,4.38-21.73,4.38s-12.13-1.58-15.35-4.84c-2.99-3.01-4.49-7.53-4.58-13.78h47.07l.17-.95c.71-3.91.79-8.98.79-10.98,0-21.06-12.29-33.63-32.87-33.63Zm-14.68,30.17c1.36-8.29,6.49-13.39,13.61-13.39,3.54,0,6.51,1.13,8.59,3.26,2.24,2.32,3.45,5.8,3.51,10.13h-25.7Z"></path>
            <path class="cls-1" d="m749.31,618.56h-22.01v-78.81h20.93v1.15c0,2.32-.17,5.64-.54,9.19,5.12-8.6,13.01-12.78,22.73-11.87l1.1.1-1.04,21.68-1.31-.26c-5.45-1.07-9.64-.33-12.8,2.28-4.69,3.85-7.06,11.98-7.06,24.14v32.4Z"></path>
            <rect class="cls-1" x="780.4" y="539.74" width="22.01" height="78.81"></rect>
            <path class="cls-1" d="m791.41,530.66c-7.46,0-13.31-5.71-13.31-13.01s5.98-13.16,13.31-13.16,13.47,5.78,13.47,13.16-6.05,13.01-13.47,13.01"></path>
            <path class="cls-1" d="m858.73,618.56h21.18l-.1-1.24c-.51-6.93-.61-14.49-.61-19.62v-31.55c0-19.69-9.55-28.1-31.94-28.1-9.92,0-21.17,2.04-29.37,5.32l-.9.36,3.73,17.42,1.3-.56c7.12-3.07,16.22-5.14,22.63-5.14,9.15,0,12.54,3.32,12.54,12.24v1.62c-28.5.26-44.18,10.1-44.18,27.78,0,13.76,9.25,23.01,23.02,23.01,9.53,0,18.04-4.11,22.95-10.8-.21,3-.25,5.9-.25,8.11v1.15Zm-1.54-33.17c0,8.33-5.67,17.32-14.85,17.32-4.76,0-8.07-3.2-8.07-7.78s2.41-10.17,22.93-10.38v.84Z"></path>
            <path class="cls-1" d="m961,618.56h-21.86v-50.1c0-8.25-2.35-11.47-8.39-11.47-9.13,0-16.55,10.53-16.55,23.48v38.1h-22.01v-78.81h20.94v1.15c0,2.49-.14,5.8-.42,8.89,5.57-7.42,14.2-11.58,24.36-11.58,15.66,0,23.94,8.81,23.94,25.48v54.87Z"></path>
            <path class="cls-1" d="m643.43,599.74l-1.35.39c-2.35.7-5.12,1.03-8.44,1.03-5.59,0-7.93-1.59-7.93-11.47v-32.4h18.62v-17.55h-18.62v-29.13l-21.86,5.85v23.28h-22.33l-9.35,26.79c-1.93,5.55-4.53,13.67-6.36,20.36-1.49-5.7-3.22-11.65-5.01-17.13l-10.58-30.02h-24.49l28.75,77.66-2.32,6.39c-3.34,9.63-8.66,14.31-16.3,14.31-2.96,0-6.36-.54-9.35-1.49l-1.31-.42-2.63,19.36,1.05.22c2.99.63,7.72,1.11,11.01,1.11,19.26,0,29.99-9.42,39.56-34.77l29.67-79.04v51.85c0,18.82,5.88,25.17,23.32,25.17,5.1,0,11.42-.82,16.9-2.19l.96-.24-1.6-17.93Z"></path>
            <polygon class="cls-1" points="39 525.62 39 548.85 108.7 548.85 108.7 618.56 131.94 618.56 131.94 525.62 39 525.62"></polygon>
            <polygon class="cls-1" points="131.94 379.58 123.22 379.58 123.22 463.8 39 463.8 39 472.52 131.94 472.52 131.94 379.58"></polygon>
          </g>
        </svg>ploading image (9).svg…]()


## **📞 Contact**
For any queries, feel free to reach out!

🔗 **LinkedIn:** [Profile][(https://www.linkedin.com/in/rakshit-bhadoria/)]
📧 **Email:** rakshitbhadoria57@gmail.com 
