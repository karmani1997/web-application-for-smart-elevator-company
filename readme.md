# Elevator Dashboard

This repository contains the code for a Elevator Dashboard. The system consists of two main components: a frontend single-page application built with ReactJS and a backend API implemented using ExpressJS. The system uses MongoDB to store elevator data. We have also included tests for backend, along with documentation on the API endpoints, frontend components, and the database schema.

**PLEASE PERFORM LOGIN TO SEE THE DASHBOARD**

## Live Working Solutions
1. Backend - [API Documentation](https://api-for-smart-elevator-company.onrender.com/swagger)
2. Frontend - [React App]()

## Sample User Accounts
1. User 1
    ```
    Email: test@abc.com
    Password: Admin12345
    ```
2. User 2
    ```
    Email: test2@abc.com
    Password: Admin12345
    ```

Additionally, you can signup with your correct email and test more by verifying the email.

## Frontend
Please refer frontend readme for details as to how to run the application locally.

## Backend
Please refer frontend readme for details as to how to run the application locally.

## Improvements
1. Recently visited elevators could have been implemented given more time. BE could have tracked visits via `elevators/{id}` endpoint and generated this information.
2. Current FE solution is a single page ReactJs application with Auth0. BE could have been interegrated to take responsibility of token and everything but given the time focus was on BE functionality and FE display. ReactJs application manages auth0 login/signup.
3. Current FE solution can be improved to follow better practices by segrating data functions into utilities and more.