# 📝 ToDo List App - CS628 Full-Stack Development Web App  

## 📌 Project Overview  
This project is my implementation of the **ToDo List App** for the **PE03 Assignment** in the **CS628 - Full-Stack Development Web App** course at **City University of Seattle**. The goal of this project was to develop a simple **ToDo list application** using **React.js**, demonstrating state management with the `useState` hook and implementing user interaction through event handlers.

---

## 📥 Input  
The application receives user input through a **text input field**, where users can enter a task description.  
- The user types a task into the input field.  
- Clicking the **"Add Task"** button submits the task.  
- Users can also interact with the **"Delete"** button to remove tasks from the list.  

---

## ⚙️ Process  
Once a task is entered and submitted, the following processes occur:  
1. **State Management:**  
   - The application maintains a list of tasks using React’s `useState` hook.  
   - The new task is added to the **state array** when the "Add Task" button is clicked.  
2. **Dynamic Rendering:**  
   - The `.map()` function iterates over the list of tasks and dynamically displays them.  
3. **Task Deletion:**  
   - When a user clicks **"Delete"**, the corresponding task is removed from the state.  
4. **Component Interaction:**  
   - `App.js` manages the state and passes data to `TodoList.js`, which further renders each task using `TodoItem.js`.  

---

## 📤 Output  
The application produces the following output:  
- A **real-time updated ToDo list**, where users can see their added tasks.  
- Clicking **"Add Task"** results in an immediate update to the displayed list.  
- Clicking **"Delete"** removes a task dynamically without needing a page refresh.  

This **interactive** and **user-friendly** interface ensures efficient task management, enhancing user experience through real-time updates and a clean UI.  

---

## 🎯 Learning Outcomes & Achievements  
By working on this project, I have successfully:  
- Developed a fully functional **ToDo list application** using **React.js**.  
- Implemented **state management** with the `useState` hook to handle dynamic updates.  
- Utilized **event handlers** for adding and deleting tasks.  
- Used `.map()` to dynamically render the task list.  
- Styled the application with **CSS** to enhance the user experience.  
- Gained hands-on experience in **handling React component re-rendering and state updates**.  

---

## 🚀 Features  
- **Add Task:** Users can enter a task and add it to the list.  
- **Delete Task:** Users can remove a task from the list.  
- **State Management:** The application efficiently manages task updates using the `useState` hook.  
- **Dynamic Rendering:** The task list is dynamically updated using the `.map()` function.  

---

## 📸 Screenshot  
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/ebfe4a14-f636-49a2-b684-ed59857d222b" />
