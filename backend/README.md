# Elevator Dashboard - Backend
This is the backend repository [Live API Documentation](https://api-for-smart-elevator-company.onrender.com/swagger) for the Elevator Dashboard. It is implemented using ExpressJS and provides API endpoints to support frontend actions. Data is stored in a MongoDB database.

## Getting Started
1. To get started with the backend, follow these steps:
1. Clone the repository from the provided GitHub link.
1. Make sure you have Node.js and MongoDB installed on your machine.
1. Create a MongoDB database and update the database connection details in the backend configuration.
1. Create a `.env` file in the root directory of the backend. This file should include the following environment variables:

   - `PORT`: The port on which the backend server will run. You can choose a port number (e.g., `PORT=3000`).
   - `MONGODB_URL`: The URL of your MongoDB database, including the connection details (e.g., `MONGODB_URL=mongodb://localhost:27017/elevatordb`).
1. Install the necessary dependencies:
    ```
    npm install
    ```
1. Start the backend server:
    ```
    npm start
    ```

## Testing
To run tests for the backend, use the following command:
```
npm test
```