# Backend API Documentation

## Table of Contents
- [User Registration](#user-registration)
- [User Login](#user-login)
- [Get User Profile](#get-user-profile)
- [User Logout](#user-logout)

---

## User Registration

### Endpoint: `/users/register`

#### Method: `POST`

#### Description:
This endpoint is used to register a new user in the system. It validates the input data, hashes the password, and creates a new user record in the database.

#### Request Body:
```json
{
  "fullname": {
    "firstname": "string (min: 3 characters, required)",
    "lastname": "string (min: 3 characters, optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min: 6 characters, required)"
}
```

#### Response:

##### Success (201):
- **Description**: User successfully registered.
- **Response Body**:
  ```json
  {
    "token": "string (JWT token)",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

##### Error (400):
- **Description**: Validation errors or missing required fields.
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "string (error message)",
        "param": "string (field name)",
        "location": "string (body)"
      }
    ]
  }
  ```

---

## User Login

### Endpoint: `/users/login`

#### Method: `POST`

#### Description:
This endpoint is used to authenticate a user and return a JWT token.

#### Request Body:
```json
{
  "email": "string (valid email format, required)",
  "password": "string (min: 6 characters, required)"
}
```

#### Response:

##### Success (200):
- **Description**: User successfully logged in.
- **Response Body**:
  ```json
  {
    "token": "string (JWT token)",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

##### Error (400 or 401):
- **Description**: Validation errors or invalid credentials.
- **Response Body**:
  ```json
  {
    "message": "string (error message)"
  }
  ```

---

## Get User Profile

### Endpoint: `/users/profile`

#### Method: `GET`

#### Description:
This endpoint retrieves the profile of the authenticated user.

#### Headers:
- **Authorization**: `Bearer <JWT token>` (required)

#### Response:

##### Success (200):
- **Description**: User profile retrieved successfully.
- **Response Body**:
  ```json
  {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
  ```

##### Error (401):
- **Description**: Unauthorized access.
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

## User Logout

### Endpoint: `/users/logout`

#### Method: `GET`

#### Description:
This endpoint logs out the authenticated user by clearing the token and blacklisting it.

#### Headers:
- **Authorization**: `Bearer <JWT token>` (required)

#### Response:

##### Success (200):
- **Description**: User successfully logged out.
- **Response Body**:
  ```json
  {
    "message": "Logged Out Successfully"
  }
  ```

##### Error (401):
- **Description**: Unauthorized access.
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```
