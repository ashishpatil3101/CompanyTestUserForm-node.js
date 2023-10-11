# CompanyTestUserForm-node.js
# User Management API Documentation

This API documentation describes the endpoints and usage for managing user data in your application.

## Endpoints

### 1. Get User Details
- **Endpoint**: `localhost:3001/details/{user_id}`
- **HTTP Method**: GET
- **Description**: Fetch details of a specific user.
- **Parameters**: `user_id` (path parameter) - The unique identifier for the user.
- **Response**: JSON object containing user details.

### 2. Update User Details
- **Endpoint**: `/update`
- **HTTP Method**: PUT
- **Description**: Update the details of a specific user.
- **Request Body**: JSON object containing the new user details.
- **auth**: add bearer token as well
- **Response**: Success or failure message.

### 3. Get User Image
- **Endpoint**: `/image/{user_id}`
- **HTTP Method**: GET
- **Description**: Get the image of a specific user.
- **Parameters**: `user_id` (path parameter) - The unique identifier for the user.
- **Response**: users image .try on browser.

### 4. Insert New User
- **Endpoint**: `/insert`
- **Html form url**:localhost:3001 
- **HTTP Method**: POST
- **Description**: Insert a new user into the database.
- **Request Body**: JSON object containing user details or have serve html page .
- **Response**: Success or failure message containing user basic detail or error message.

### 5. Delete User
- **Endpoint**: `/delete/{user_id}`
- **HTTP Method**: DELETE
- **Description**: Delete a user from the database.
- **Parameters**: `user_id` (path parameter) - The unique identifier for the user.
- **Response**: Success or failure message.

## Authentication
- bcrypt and jwt ,token based
## Database Structure
- The application's database includes a `users` table with the following structure:

| Field          | Type        | Description                  |
| -------------- | ----------- | ---------------------------- |
| user_id        | UUIDV4      | Unique user identifier        |
| user_name      | String      | User's username              |
| user_email     | String      | User's email address (unique)|
| user_password  | String      | User's password              |
| user_image     | blob        | User's image                  |
| total_orders   | Integer     | Total orders placed by user |
| created_at     | Timestamp   | User's creation timestamp    |
| last_logged_in | Timestamp   | User's last login timestamp  |

## Usage
- Use the provided endpoints to manage user data in your application. Ensure that proper authentication is implemented to secure sensitive operations.


