# Uber Backend

This repository contains the backend implementation for an Uber-like application. Below is a detailed overview of the project structure and functionality.

---

## Project Structure

```
Uber/
├── Backend/
│   ├── controllers/
│   │   ├── captain.controller.js
│   │   └── user.controller.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── captain.model.js
│   │   ├── user.model.js
│   │   └── blackListToken.model.js
│   ├── routes/
│   │   ├── captain.routes.js
│   │   └── user.routes.js
│   ├── services/
│   │   ├── captain.service.js
│   │   └── user.service.js
│   ├── db/
│   │   └── db.js
│   ├── app.js
│   └── ...
└── README.md
```

---

## Features

### 1. **Captain Management**
- Captains can register with their details, including name, email, password, and vehicle information.
- Captains can log in using their email and password.
- Authenticated captains can retrieve their profile information.
- Captains can log out, and their JWT token is blacklisted to prevent reuse.

### 2. **User Management**
- Users can register with their details, including name, email, and password.
- Users can log in using their email and password.
- Authenticated users can retrieve their profile information.
- Users can log out, and their JWT token is blacklisted to prevent reuse.

---

## API Endpoints

### Captain Routes

| Method | Endpoint         | Description                     |
|--------|-------------------|---------------------------------|
| POST   | `/captains/register` | Register a new captain         |
| POST   | `/captains/login`    | Login as a captain             |
| GET    | `/captains/profile`  | Get captain profile (auth)     |
| GET    | `/captains/logout`   | Logout captain (auth)          |

### User Routes

| Method | Endpoint      | Description                     |
|--------|---------------|---------------------------------|
| POST   | `/users/register` | Register a new user            |
| POST   | `/users/login`    | Login as a user                |
| GET    | `/users/profile`  | Get user profile (auth)        |
| GET    | `/users/logout`   | Logout user (auth)             |

---

## Validation Rules

### Captain Registration
- `email`: Must be a valid email.
- `fullname.firstname`: Minimum 3 characters.
- `password`: Minimum 6 characters.
- `vehicle.color`: Minimum 3 characters.
- `vehicle.plate`: Minimum 3 characters.
- `vehicle.capacity`: Must be an integer ≥ 1.
- `vehicle.vehicleType`: Must be one of `car`, `motorcycle`, or `auto`.

### User Registration
- `email`: Must be a valid email.
- `fullname.firstname`: Minimum 3 characters.
- `password`: Minimum 6 characters.

### Login (Both Captains and Users)
- `email`: Must be a valid email.
- `password`: Minimum 6 characters.

---

## Technical Details

### Models

#### Captain Model
- **Fields**:
  - `fullname`: Contains `firstname` and `lastname` with validation.
  - `email`: Unique and validated email address.
  - `password`: Hashed password stored securely.
  - `vehicle`: Contains details like `color`, `plate`, `capacity`, and `vehicleType`.
  - `status`: Enum with values `active` and `inactive`.
  - `location`: Stores latitude and longitude.

- **Methods**:
  - `generateAuthToken`: Generates a JWT token for authentication.
  - `comparePassword`: Compares a plain-text password with the hashed password.
  - `hashPassword`: Hashes a plain-text password.

#### User Model
- **Fields**:
  - `fullname`: Contains `firstname` and `lastname` with validation.
  - `email`: Unique and validated email address.
  - `password`: Hashed password stored securely.

- **Methods**:
  - `generateAuthToken`: Generates a JWT token for authentication.
  - `comparePassword`: Compares a plain-text password with the hashed password.
  - `hashPassword`: Hashes a plain-text password.

#### Blacklist Token Model
- Used to store JWT tokens that are blacklisted during logout.

---

### Services

#### Captain Service
- Handles the creation of captains with validation for required fields.
- Ensures proper structuring of data before saving to the database.

#### User Service
- Handles the creation of users with validation for required fields.
- Ensures proper structuring of data before saving to the database.

---

### Controllers

#### Captain Controller
- **registerCaptain**: Handles captain registration with validation and password hashing.
- **loginCaptain**: Handles login with password comparison and token generation.
- **getCaptainProfile**: Retrieves the authenticated captain's profile.
- **logoutCaptain**: Logs out the captain by blacklisting the token.

#### User Controller
- **registerUser**: Handles user registration with validation and password hashing.
- **loginUser**: Handles login with password comparison and token generation.
- **getUserProfile**: Retrieves the authenticated user's profile.
- **logoutUser**: Logs out the user by blacklisting the token.

---

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Uber/Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `Backend` directory.
   - Add the following variables:
     ```
     JWT_SECRET=<your_jwt_secret>
     DB_URI=<your_database_uri>
     ```

4. Start the server:
   ```bash
   npm start
   ```

5. Access the API at `http://localhost:<port>`.

---

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

---

## License

This project is licensed under the MIT License.
