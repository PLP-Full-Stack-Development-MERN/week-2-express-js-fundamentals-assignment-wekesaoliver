```markdown
# Express.js Fundamentals Assignment

This project is a simple Express.js application that demonstrates the fundamentals of creating RESTful APIs, using middleware, and organizing a project with a clear folder structure. It includes routes for managing users and products, along with a custom middleware for logging requests.

---

## Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [Project Structure](#project-structure)
3. [API Endpoints](#api-endpoints)
4. [Testing the API](#testing-the-api)
5. [Dependencies](#dependencies)
6. [Contributing](#contributing)

---

## Setup Instructions

Follow these steps to set up and run the project locally:

### 1. Install Node.js using NVM
If you don't already have Node.js installed, use **NVM (Node Version Manager)** to install it:

```bash
# Install the latest version of Node.js
nvm install node
```

### 2. Clone the Repository
Clone this repository to your local machine and navigate into the project directory:

```bash
git clone https://github.com/your-username/express-assignment.git
cd express-assignment
```

### 3. Install Dependencies
Install all the required dependencies using npm:

```bash
npm install
```

### 4. Create a `.env` File
Create a `.env` file in the root directory of the project and define the `PORT` variable:

run:

```bash
cp .env.example .env
```

```env
PORT=5000
```

### 5. Start the Server
Run the server using the following command:

```bash
node index.js
```

The server will start running on `http://localhost:5000`.

---

## Project Structure

The project is organized as follows:

```
express-assignment/
│-- routes/
│    ├── userRoutes.js       # Routes for user-related endpoints
│    ├── productRoutes.js    # Routes for product-related endpoints
│-- middleware/
│    ├── logger.js           # Custom middleware for logging requests
│-- controllers/
│    ├── userController.js   # Business logic for user-related operations
│    ├── productController.js # Business logic for product-related operations
│-- index.js                 # Entry point of the application
│-- package.json             # Project dependencies and scripts
│-- README.md                # Project documentation
│-- .env                     # Environment variables
```

---

## API Endpoints

The following API endpoints are available:

### Users
- **GET `/users`**  
  Retrieve all users.  
  Example: `GET http://localhost:5000/users`

- **POST `/users`**  
  Create a new user.  
  Example: `POST http://localhost:5000/users`  
  Request Body:
  ```json
  {
    "name": "Oliver",
    "email": "oliver@gmail.com",
    "age": 23
  }
  ```

- **PUT `/users/:id`**  
  Update a user by ID.  
  Example: `PUT http://localhost:5000/users/1`  
  Request Body:
  ```json
  {
    "name": "Wekesa",
    "email": "wekesa@gmail.com",
    "age": 25
  }
  ```

- **DELETE `/users/:id`**  
  Delete a user by ID.  
  Example: `DELETE http://localhost:5000/users/1`

---

### Products
- **GET `/products`**  
  Retrieve all products.  
  Example: `GET http://localhost:5000/products`

- **POST `/products`**  
  Create a new product.  
  Example: `POST http://localhost:5000/products`  
  Request Body:
  ```json
  {
    "name": "Laptop",
    "price": 1200,
    "description": "A high-performance laptop."
  }
  ```

- **PUT `/products/:id`**  
  Update a product by ID.  
  Example: `PUT http://localhost:5000/products/1`  
  Request Body:
  ```json
  {
    "name": "Gaming Laptop",
    "price": 1500,
    "description": "A laptop for gaming enthusiasts."
  }
  ```

- **DELETE `/products/:id`**  
  Delete a product by ID.  
  Example: `DELETE http://localhost:5000/products/1`

---

## Testing the API

You can test the API endpoints using tools like [Postman](https://www.postman.com/) or `cURL`.

## Dependencies

The project uses the following dependencies:

- **Express.js**: A fast, unopinionated web framework for Node.js.
- **dotenv**: Loads environment variables from a `.env` file.

To install all dependencies, run:

```bash
npm install
```