# Full-Stack Product Management Application

A complete full-stack application with a **React-based frontend** and a **Node.js/Express backend** integrated with **MongoDB**. This application includes **authentication**, **authorization**, and **CRUD functionality** for product management.

---

## Features

### Frontend
- **Login/Signup**: Secure user authentication using JWT.
- **Product Management**: View, create, update, and delete products.
- **Protected Routes**: Restrict access to product pages for unauthorized users.
- **Responsive UI**: Works across all devices with a clean and user-friendly interface.

### Backend
- **Authentication**: JWT-based access and refresh token support.
- **API Endpoints**: RESTful APIs for user and product management.
- **Secure Data Handling**: Passwords are hashed with bcrypt.
- **Token Management**: Access and refresh tokens ensure secure and seamless user sessions.

---

## Technologies Used

### Frontend
- **React** (with Hooks)
- **React Router** for routing
- **Axios** for API requests
- **CSS** for styling

### Backend
- **Node.js** with **Express**
- **MongoDB** (via Mongoose)
- **JWT** for secure authentication
- **Bcrypt.js** for password hashing

---

## Getting Started

### Frontend Setup

1. **Clone the Frontend Repository**
   ```bash
   git clone https://github.com/your-username/fullstack-frontend.git
   cd fullstack-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Environment Variables**
   Create a `.env` file in the root directory:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Start the Frontend**
   ```bash
   npm start
   ```

### Backend Setup

1. **Clone the Backend Repository**
   ```bash
   git clone https://github.com/your-username/fullstack-backend.git
   cd fullstack-backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Environment Variables**
   Create a `.env` file in the root directory:
   ```
   MONGO_URI=mongodb://localhost:27017/fullstack-app
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the Backend**
   ```bash
   npm start
   ```

---

## Folder Structure

### Frontend
```
src/
├── components/
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── ProductList.jsx
│   ├── ProductForm.jsx
│   ├── ProtectedRoute.jsx
├── api.js
├── App.jsx
├── index.js
├── style.css
```

### Backend
```
src/
├── controllers/
│   ├── authController.js
│   ├── productController.js
├── models/
│   ├── User.js
│   ├── Product.js
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
├── server.js
```

---

## Usage

### Frontend
- **Login/Signup**: Access via `/login` and `/signup` routes.
- **Product Management**: View products on `/products` and perform CRUD actions.

### Backend
- **Authentication**: 
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Login to retrieve a JWT.
- **Products**: 
  - `GET /api/products`: Get all products.
  - `POST /api/products`: Add a new product (requires token).
  - `PUT /api/products/:id`: Update a product (requires token).
  - `DELETE /api/products/:id`: Delete a product (requires token).

---

## Contributing

1. Fork the repositories.
2. Create a feature branch:
   ```bash
   git checkout -b feature/branch-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Feature description"
   ```
4. Push the branch:
   ```bash
   git push origin feature/branch-name
   ```
5. Create a Pull Request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.