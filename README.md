# **8-bit Pixel Art Editor Startup**  
**Project Link:** [startup.tylertimothy.click](http://startup.tylertimothy.click) *(Site not currently hosted. Please message me for project details.)*

---

## 🎨 **Project Overview**  
The **8-bit Pixel Art Editor** is a simple and intuitive tool for creating and sharing pixel art. Whether you're designing retro video game sprites or simple pixel logos, this editor makes pixel art one of the most approachable forms of creativity.  

> "8-bit pixel art editor is going to be straight fire." - *Tyler*  

[![Pixel Art Editor](https://github.com/user-attachments/assets/8d5a3d69-4c1e-4fb0-83ea-b8096e0e1d55)](https://github.com/user-attachments/assets/8d5a3d69-4c1e-4fb0-83ea-b8096e0e1d55)

---

## ✨ **Key Features**  
- **Pixel Grid**: Place pixels on an 8x8 or larger grid to create custom artwork.  
- **Color Palettes**: Choose from custom 8-bit color palettes.  
- **Art Sharing**: Share your creations with others.  
- **Live Updates**: See how many users are actively working on art and view their progress in real-time.  

---

## 🛠️ **Technologies Used**  

### **Frontend**  
- **HTML**:  
   - Four pages: Home (index), Art Editor, About, and Gallery.  
   - Links between pages and to this repository.  
   - Display usernames, prompts, and an interactive drawing grid (image placeholder for now).  
- **CSS**:  
   - Responsive layout using Bootstrap and custom grids.  
   - Consistent header, footer, color scheme, and fonts.  
   - Organized gallery using CSS grid.  
- **JavaScript**:  
   - **Application Logic**: Canvas-based pixel-by-pixel art creation.  
   - **Local Storage**: Save and display your artwork locally in the gallery page.  
   - **Dynamic WebSocket Simulation**: Displays placeholder "user colors" in real time.  
   - **Login Logic**: Navigate to the art creation page upon entering credentials.  

---

### **Backend**  
- **Node.js / Express**:  
   - API endpoints for functionality.  
   - Static middleware to serve the frontend.  
   - Integrated calls to a third-party API for suggested color palettes.  
- **MongoDB Atlas**:  
   - Stores user credentials and artwork.  
   - API endpoints handle data retrieval and storage.  
- **WebSocket**:  
   - Enables real-time chat and live updates on the art page.  

---

## 📂 **Deliverables**  

### **HTML Deliverables**  
- Four HTML pages: **Art, About, Gallery, and Home (index)**.  
- Links between pages and repository.  
- Input boxes for login functionality.  

### **CSS Deliverables**  
- Consistent **Bootstrap header** and footer.  
- Responsive design (excluding art canvas and images).  
- Organized grid-based layout for the gallery.  
- Custom branding and color contrast.  

### **JavaScript Deliverables**  
- **Login**: Navigate to the pixel art editor upon login.  
- **Local Storage**: Save and display your art on the gallery page.  
- **WebSocket Placeholder**: Simulates other users’ color selections.  
- **Canvas Logic**: Pixel-by-pixel art creation using the canvas element.  

### **Service Deliverables**  
- **Node.js / Express API**: Backend endpoints retrieve suggested color palettes.  
- **Static Middleware**: Serves the frontend files.  
- **API Calls**: Integrates with a color palette API using `fetch`.  

### **Database Deliverables**  
- **MongoDB Atlas**: Stores artwork and user credentials.  
- **Endpoints**: Processes and sends data to MongoDB.  

### **Authentication Deliverables**  
- **User Registration**: Create a new account stored in MongoDB.  
- **Login Functionality**: Existing users can log in with credentials.  
- **Feature Restriction**: Only logged-in users can create pixel art (frontend enforcement).  

### **WebSocket Deliverables**  
- **Backend**: Listens for WebSocket connections.  
- **Frontend**: Establishes WebSocket connections.  
- **Real-Time Chat**: Data sent and displayed on the main art page.  

---

## 🚀 **Future Improvements**  
- Enhance live updates for collaborative art creation.  
- Add image exporting and advanced grid tools.  
- Implement backend enforcement for authentication-restricted features.  

---

## 📧 **Contact**  
If you have any questions or would like more details about this project, please feel free to message me.  
