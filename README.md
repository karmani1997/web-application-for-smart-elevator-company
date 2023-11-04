# Elevator Maintenance Dashboard
## Overview
Welcome to the Elevator Maintenance Dashboard, a comprehensive web application for a smart elevator maintenance company. This application provides a user-friendly dashboard that displays the operational status of elevators and offers interactive functionality for viewing elevator details.

## Objective
The purpose of this assignment is to design and build a web application that fulfills the following requirements:

* Display the total number of elevators that are operational, issuing warnings, and out of service.
* List recently visited or inspected elevators.
* Allow users to click on elevator counts to view a detailed list of elevators in that state.
* Allow users to click on individual elevators to view detailed information, status, and analytical data.
## Table of Contents
- [Getting Started](#getting-started)
- [Security](#authentication)
- [Frontend](#frontend)
- [Backend](#backend)
- [Database](#database)
- [Tests](#tests)
- [Documentation](#documentation)
- [Version Control](#version-control)
- [Infrastructure (Optional)](#infrastructure-optional)
- [Test Data](#test-data)
- [Deliverables](#deliverables)
- [Evaluation](#elevator-maintenance-dashboard)
## Getting Started
### Authentication
The application authenticates users using Auth0. Two independent demo users have been created.

### Frontend
* Developed using ReactJS2.
* The dashboard displays counts of operational, warning, and out-of-service elevators.
* Provides a list of recently visited elevators.
* Supports interactive functionality as per the assignment requirements.
### Backend
* Developed using ExpressJS3.
* The API provides endpoints to support frontend actions.
### Database
* MongoDB4 is used to store elevator and user data.
### Tests
* Both frontend and backend have been thoroughly tested. We used [your preferred testing framework] for testing.
### Documentation
* Detailed documentation covers API endpoints, frontend components, and the database schema.
* Setup instructions and any assumptions made are included.
### Version Control
GitHub5 is used for version control. A private repository has been created for this project.
### Infrastructure (Optional)
* An Amazon CDK6 configuration is provided for building the infrastructure using API Gateway and AWS Lambda.
* The frontend is hosted in an S3 bucket.
### Test Data
Example elevator data is provided in two JSON files inside the "Example Data" folder.
### Deliverables
Link to the private GitHub repository containing the application code, tests, and documentation.
(Optional) Amazon CDK configuration.
Live demo of the application, locally hosted.

